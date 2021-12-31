import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateActivityTable1640945373597 implements MigrationInterface {
  name = 'CreateActivityTable1640945373597';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."activity_type_enum" AS ENUM('BOOL', 'NUMERIC')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."activity_daygoal_enum" AS ENUM('BOOL', 'NUMERIC')`,
    );
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "startDate" date NOT NULL, "endDate" date NOT NULL, "type" "public"."activity_type_enum" NOT NULL, "dayGoal" "public"."activity_daygoal_enum" NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity" ADD CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "activity" DROP CONSTRAINT "FK_3571467bcbe021f66e2bdce96ea"`,
    );
    await queryRunner.query(`DROP TABLE "activity"`);
    await queryRunner.query(`DROP TYPE "public"."activity_daygoal_enum"`);
    await queryRunner.query(`DROP TYPE "public"."activity_type_enum"`);
  }
}
