--ユーザ作成
CREATE USER postgres;

--DB作成
CREATE DATABASE totonoe;

--ユーザーを切り替え
\c totonoe

--ユーザにDBの権限をまとめて付与
GRANT ALL PRIVILEGES ON DATABASE totonoe TO postgres;
