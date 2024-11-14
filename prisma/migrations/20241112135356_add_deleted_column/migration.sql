-- Start transaction
BEGIN;

CREATE TYPE "Role_new" AS ENUM ('USER', 'TASKER');

ALTER TABLE "User" 
  ALTER COLUMN "role" DROP DEFAULT, 
  ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");

ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";

DROP TYPE "Role_old";

ALTER TABLE "User" 
  ADD COLUMN "deleted" BOOLEAN DEFAULT false;

ALTER TABLE "User" 
  ALTER COLUMN "role" SET DEFAULT 'USER';

CREATE TABLE "Tasker" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "skills" TEXT[],
    "availability" TEXT NOT NULL
);

CREATE UNIQUE INDEX "Tasker_userId_key" ON "Tasker"("userId");

ALTER TABLE "Tasker" 
  ADD CONSTRAINT "Tasker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;
