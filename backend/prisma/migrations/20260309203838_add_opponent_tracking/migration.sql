-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "byesReceived" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "PlayerOpponent" (
    "id" TEXT NOT NULL,
    "playerId1" TEXT NOT NULL,
    "playerId2" TEXT NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "tournamentId" TEXT NOT NULL,

    CONSTRAINT "PlayerOpponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlayerOpponent_playerId1_tournamentId_idx" ON "PlayerOpponent"("playerId1", "tournamentId");

-- CreateIndex
CREATE INDEX "PlayerOpponent_playerId2_tournamentId_idx" ON "PlayerOpponent"("playerId2", "tournamentId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerOpponent_playerId1_playerId2_tournamentId_key" ON "PlayerOpponent"("playerId1", "playerId2", "tournamentId");

-- AddForeignKey
ALTER TABLE "PlayerOpponent" ADD CONSTRAINT "PlayerOpponent_playerId1_fkey" FOREIGN KEY ("playerId1") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerOpponent" ADD CONSTRAINT "PlayerOpponent_playerId2_fkey" FOREIGN KEY ("playerId2") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
