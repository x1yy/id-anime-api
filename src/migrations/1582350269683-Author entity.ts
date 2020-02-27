import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthorEntity1582350269683 implements MigrationInterface {
    name = 'AuthorEntity1582350269683'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `author`", undefined);
    }

}
