import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAnimeEpisodeEntity1582422068576 implements MigrationInterface {
    name = 'CreateAnimeEpisodeEntity1582422068576'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `episode` (`id` int NOT NULL AUTO_INCREMENT, `link` mediumtext NOT NULL, `episode` int NOT NULL, `title` mediumtext NOT NULL, `synopsis` longtext NOT NULL, `animeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `anime` (`id` int NOT NULL AUTO_INCREMENT, `title` mediumtext NOT NULL, `synopsis` longtext NOT NULL, `metaDescription` varchar(160) NOT NULL, `coverLink` mediumtext NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `episode` ADD CONSTRAINT `FK_969247f869e17aeb3bcd3c548f6` FOREIGN KEY (`animeId`) REFERENCES `anime`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `episode` DROP FOREIGN KEY `FK_969247f869e17aeb3bcd3c548f6`", undefined);
        await queryRunner.query("DROP TABLE `anime`", undefined);
        await queryRunner.query("DROP TABLE `episode`", undefined);
    }

}
