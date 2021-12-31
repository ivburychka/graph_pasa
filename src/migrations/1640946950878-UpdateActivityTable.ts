import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateActivityTable1640946950878 implements MigrationInterface {
    name = 'UpdateActivityTable1640946950878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "dayGoal"`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "dayGoal" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "dayGoal"`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "dayGoal" integer NOT NULL`);
    }

}
