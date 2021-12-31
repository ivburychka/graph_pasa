import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateActivityTable1640946865031 implements MigrationInterface {
    name = 'UpdateActivityTable1640946865031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "dayGoal"`);
        await queryRunner.query(`DROP TYPE "public"."activity_daygoal_enum"`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "dayGoal" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "dayGoal"`);
        await queryRunner.query(`CREATE TYPE "public"."activity_daygoal_enum" AS ENUM('BOOL', 'NUMERIC')`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "dayGoal" "public"."activity_daygoal_enum" NOT NULL`);
    }

}
