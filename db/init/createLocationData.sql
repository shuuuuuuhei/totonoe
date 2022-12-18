-- 都道府県データ作成
CREATE TABLE public.prefecture (
	id bigserial NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT prefecture_pkey PRIMARY KEY (id)
);

INSERT INTO public.prefecture
(id, "name")
VALUES(1, '北海道');
INSERT INTO public.prefecture
(id, "name")
VALUES(2, '青森県');
INSERT INTO public.prefecture
(id, "name")
VALUES(3, '岩手県');
INSERT INTO public.prefecture
(id, "name")
VALUES(4, '宮城県');
INSERT INTO public.prefecture
(id, "name")
VALUES(5, '秋田県');
INSERT INTO public.prefecture
(id, "name")
VALUES(6, '山形県');
INSERT INTO public.prefecture
(id, "name")
VALUES(7, '福島県');
INSERT INTO public.prefecture
(id, "name")
VALUES(8, '茨城県');
INSERT INTO public.prefecture
(id, "name")
VALUES(9, '栃木県');
INSERT INTO public.prefecture
(id, "name")
VALUES(10, '群馬県');
INSERT INTO public.prefecture
(id, "name")
VALUES(11, '埼玉県');
INSERT INTO public.prefecture
(id, "name")
VALUES(12, '千葉県');
INSERT INTO public.prefecture
(id, "name")
VALUES(13, '東京都');
INSERT INTO public.prefecture
(id, "name")
VALUES(14, '神奈川県');
INSERT INTO public.prefecture
(id, "name")
VALUES(15, '新潟県');
INSERT INTO public.prefecture
(id, "name")
VALUES(16, '富山県');
INSERT INTO public.prefecture
(id, "name")
VALUES(17, '石川県');
INSERT INTO public.prefecture
(id, "name")
VALUES(18, '福井県');
INSERT INTO public.prefecture
(id, "name")
VALUES(19, '山梨県');
INSERT INTO public.prefecture
(id, "name")
VALUES(20, '長野県');
INSERT INTO public.prefecture
(id, "name")
VALUES(21, '岐阜県');
INSERT INTO public.prefecture
(id, "name")
VALUES(22, '静岡県');
INSERT INTO public.prefecture
(id, "name")
VALUES(23, '愛知県');
INSERT INTO public.prefecture
(id, "name")
VALUES(24, '三重県');
INSERT INTO public.prefecture
(id, "name")
VALUES(25, '滋賀県');
INSERT INTO public.prefecture
(id, "name")
VALUES(26, '京都府');
INSERT INTO public.prefecture
(id, "name")
VALUES(27, '大阪府');
INSERT INTO public.prefecture
(id, "name")
VALUES(28, '兵庫県');
INSERT INTO public.prefecture
(id, "name")
VALUES(29, '奈良県');
INSERT INTO public.prefecture
(id, "name")
VALUES(30, '和歌山県');
INSERT INTO public.prefecture
(id, "name")
VALUES(31, '鳥取県');
INSERT INTO public.prefecture
(id, "name")
VALUES(32, '島根県');
INSERT INTO public.prefecture
(id, "name")
VALUES(33, '岡山県');
INSERT INTO public.prefecture
(id, "name")
VALUES(34, '広島県');
INSERT INTO public.prefecture
(id, "name")
VALUES(35, '山口県');
INSERT INTO public.prefecture
(id, "name")
VALUES(36, '徳島県');
INSERT INTO public.prefecture
(id, "name")
VALUES(37, '香川県');
INSERT INTO public.prefecture
(id, "name")
VALUES(38, '愛媛県');
INSERT INTO public.prefecture
(id, "name")
VALUES(39, '高知県');
INSERT INTO public.prefecture
(id, "name")
VALUES(40, '福岡県');
INSERT INTO public.prefecture
(id, "name")
VALUES(41, '佐賀県');
INSERT INTO public.prefecture
(id, "name")
VALUES(42, '長崎県');
INSERT INTO public.prefecture
(id, "name")
VALUES(43, '熊本県');
INSERT INTO public.prefecture
(id, "name")
VALUES(44, '大分県');
INSERT INTO public.prefecture
(id, "name")
VALUES(45, '宮崎県');
INSERT INTO public.prefecture
(id, "name")
VALUES(46, '鹿児島県');
INSERT INTO public.prefecture
(id, "name")
VALUES(47, '沖縄県');

-- 市区町村データ作成
CREATE TABLE public.city (
	id bigserial NOT NULL,
	prefecture_id int8 NOT NULL,
	"name" varchar(100) NOT NULL,
	yomi text NOT NULL,
	latitude text NOT NULL,
	longitude text NOT NULL,
	CONSTRAINT city_pkey PRIMARY KEY (id,prefecture_id)
);

INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1100, 1, '札幌市', 'さっぽろし', '43.06208877', '141.3543886');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1101, 1, '札幌市 中央区', 'さっぽろし ちゅうおうく', '43.0553865', '141.3409671');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1102, 1, '札幌市 北区', 'さっぽろし きたく', '43.09079296', '141.3408807');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1103, 1, '札幌市 東区', 'さっぽろし ひがしく', '43.07611111', '141.3636111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1104, 1, '札幌市 白石区', 'さっぽろし しろいしく', '43.04756872', '141.40522');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1105, 1, '札幌市 豊平区', 'さっぽろし とよひらく', '43.03134414', '141.3800612');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1106, 1, '札幌市 南区', 'さっぽろし みなみく', '42.99000828', '141.3533998');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1107, 1, '札幌市 西区', 'さっぽろし にしく', '43.0744547', '141.3008974');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1108, 1, '札幌市 厚別区', 'さっぽろし あつべつく', '43.03639318', '141.4747615');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1109, 1, '札幌市 手稲区', 'さっぽろし ていねく', '43.12187423', '141.2457843');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1110, 1, '札幌市 清田区', 'さっぽろし きよたく', '42.99951523', '141.4437927');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1202, 1, '函館市', 'はこだてし', '41.76864057', '140.7290679');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1203, 1, '小樽市', 'おたるし', '43.19070647', '140.9944857');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1204, 1, '旭川市', 'あさひかわし', '43.77083333', '142.365');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1205, 1, '室蘭市', 'むろらんし', '42.31520812', '140.9736731');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1206, 1, '釧路市', 'くしろし', '42.98492315', '144.3817102');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1207, 1, '帯広市', 'おびひろし', '42.92405501', '143.1962056');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1208, 1, '北見市', 'きたみし', '43.80392712', '143.8957877');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1209, 1, '夕張市', 'ゆうばりし', '43.0568559', '141.9740889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1210, 1, '岩見沢市', 'いわみざわし', '43.19611111', '141.7758333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1211, 1, '網走市', 'あばしりし', '44.02063505', '144.2734742');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1212, 1, '留萌市', 'るもいし', '43.94100709', '141.6369314');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1213, 1, '苫小牧市', 'とまこまいし', '42.63416667', '141.6055556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1214, 1, '稚内市', 'わっかないし', '45.41563748', '141.6730675');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1215, 1, '美唄市', 'びばいし', '43.3330171', '141.8540435');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1216, 1, '芦別市', 'あしべつし', '43.51821332', '142.1894862');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1217, 1, '江別市', 'えべつし', '43.10365105', '141.5360696');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1218, 1, '赤平市', 'あかびらし', '43.55798822', '142.0441993');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1219, 1, '紋別市', 'もんべつし', '44.35638889', '143.3541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1220, 1, '士別市', 'しべつし', '44.17857528', '142.4001608');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1221, 1, '名寄市', 'なよろし', '44.3559089', '142.4631835');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1222, 1, '三笠市', 'みかさし', '43.24565996', '141.8753755');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1223, 1, '根室市', 'ねむろし', '43.33007352', '145.5828718');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1224, 1, '千歳市', 'ちとせし', '42.82100926', '141.6510058');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1225, 1, '滝川市', 'たきかわし', '43.55772933', '141.9103899');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1226, 1, '砂川市', 'すながわし', '43.49478639', '141.9034778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1227, 1, '歌志内市', 'うたしないし', '43.52166667', '142.0352778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1228, 1, '深川市', 'ふかがわし', '43.72319472', '142.0535134');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1229, 1, '富良野市', 'ふらのし', '43.34200922', '142.3831468');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1230, 1, '登別市', 'のぼりべつし', '42.41277778', '141.1066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1231, 1, '恵庭市', 'えにわし', '42.88258231', '141.5777691');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1233, 1, '伊達市', 'だてし', '42.47194444', '140.8647222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1234, 1, '北広島市', 'きたひろしまし', '42.98566933', '141.5635545');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1235, 1, '石狩市', 'いしかりし', '43.17138889', '141.3155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1236, 1, '北斗市', 'ほくとし', '41.82416667', '140.6530556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1303, 1, '当別町', 'とうべつちょう', '43.22381951', '141.5171281');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1304, 1, '新篠津村', 'しんしのつむら', '43.22541251', '141.6492815');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1331, 1, '松前町', 'まつまえちょう', '41.42996802', '140.1103613');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1332, 1, '福島町', 'ふくしまちょう', '41.48374263', '140.2512881');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1333, 1, '知内町', 'しりうちちょう', '41.59833333', '140.4188889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1334, 1, '木古内町', 'きこないちょう', '41.6783268', '140.4376294');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1337, 1, '七飯町', 'ななえちょう', '41.89571953', '140.6944054');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1343, 1, '鹿部町', 'しかべちょう', '42.03861111', '140.8158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1345, 1, '森町', 'もりまち', '42.10496108', '140.5764167');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1346, 1, '八雲町', 'やくもちょう', '42.25589383', '140.2651921');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1347, 1, '長万部町', 'おしゃまんべちょう', '42.51340337', '140.3801967');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1361, 1, '江差町', 'えさしちょう', '41.86928745', '140.1275909');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1362, 1, '上ノ国町', 'かみのくにちょう', '41.80111111', '140.1213889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1363, 1, '厚沢部町', 'あっさぶちょう', '41.92094925', '140.2253619');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1364, 1, '乙部町', 'おとべちょう', '41.96854529', '140.1353881');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1367, 1, '奥尻町', 'おくしりちょう', '42.17228824', '139.5141374');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1370, 1, '今金町', 'いまかねちょう', '42.42937171', '140.0086423');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1371, 1, 'せたな町', 'せたなちょう', '42.41694444', '139.8833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1391, 1, '島牧村', 'しままきむら', '42.70049649', '140.0615316');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1392, 1, '寿都町', 'すっつちょう', '42.7910538', '140.2288275');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1393, 1, '黒松内町', 'くろまつないちょう', '42.66777778', '140.3077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1394, 1, '蘭越町', 'らんこしちょう', '42.80923992', '140.5283803');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1395, 1, 'ニセコ町', 'にせこちょう', '42.80480026', '140.6875294');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1396, 1, '真狩村', 'まっかりむら', '42.7630045', '140.8036719');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1397, 1, '留寿都村', 'るすつむら', '42.73730784', '140.8756242');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1398, 1, '喜茂別町', 'きもべつちょう', '42.79543379', '140.9345372');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1399, 1, '京極町', 'きょうごくちょう', '42.8582269', '140.8841146');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1400, 1, '倶知安町', 'くっちゃんちょう', '42.90171229', '140.7590211');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1401, 1, '共和町', 'きょうわちょう', '42.98040776', '140.6114265');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1402, 1, '岩内町', 'いわないちょう', '42.97878475', '140.5091811');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1403, 1, '泊村', 'とまりむら', '43.06300163', '140.4989034');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1404, 1, '神恵内村', 'かもえないむら', '43.14380532', '140.4309293');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1405, 1, '積丹町', 'しゃこたんちょう', '43.29874919', '140.5979824');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1406, 1, '古平町', 'ふるびらちょう', '43.26533414', '140.6389515');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1407, 1, '仁木町', 'にきちょう', '43.15166667', '140.7661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1408, 1, '余市町', 'よいちちょう', '43.19531756', '140.7835239');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1409, 1, '赤井川村', 'あかいがわむら', '43.08349202', '140.8136322');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1423, 1, '南幌町', 'なんぽろちょう', '43.06371295', '141.6502959');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1424, 1, '奈井江町', 'ないえちょう', '43.42527778', '141.8827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1425, 1, '上砂川町', 'かみすながわちょう', '43.482118', '141.9835294');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1427, 1, '由仁町', 'ゆにちょう', '42.99960678', '141.79028');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1428, 1, '長沼町', 'ながぬまちょう', '43.01036818', '141.6954173');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1429, 1, '栗山町', 'くりやまちょう', '43.05630081', '141.7840938');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1430, 1, '月形町', 'つきがたちょう', '43.33839288', '141.6695448');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1431, 1, '浦臼町', 'うらうすちょう', '43.43036951', '141.8187355');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1432, 1, '新十津川町', 'しんとつかわちょう', '43.54847601', '141.8770965');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1433, 1, '妹背牛町', 'もせうしちょう', '43.70017033', '141.9615052');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1434, 1, '秩父別町', 'ちっぷべつちょう', '43.76701307', '141.9578543');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1436, 1, '雨竜町', 'うりゅうちょう', '43.64396502', '141.8890417');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1437, 1, '北竜町', 'ほくりゅうちょう', '43.73138889', '141.8791667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1438, 1, '沼田町', 'ぬまたちょう', '43.80670325', '141.9336905');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1452, 1, '鷹栖町', 'たかすちょう', '43.84333333', '142.3544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1453, 1, '東神楽町', 'ひがしかぐらちょう', '43.69638494', '142.4515003');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1454, 1, '当麻町', 'とうまちょう', '43.82813767', '142.5083928');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1455, 1, '比布町', 'ぴっぷちょう', '43.87500414', '142.4776752');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1456, 1, '愛別町', 'あいべつちょう', '43.90667341', '142.5778203');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1457, 1, '上川町', 'かみかわちょう', '43.84712409', '142.7704637');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1458, 1, '東川町', 'ひがしかわちょう', '43.6988984', '142.5101593');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1459, 1, '美瑛町', 'びえいちょう', '43.5883298', '142.4670597');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1460, 1, '上富良野町', 'かみふらのちょう', '43.45561409', '142.4671231');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1461, 1, '中富良野町', 'なかふらのちょう', '43.40583333', '142.4252778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1462, 1, '南富良野町', 'みなみふらのちょう', '43.16416667', '142.5683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1463, 1, '占冠村', 'しむかっぷむら', '42.97987952', '142.3985363');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1464, 1, '和寒町', 'わっさむちょう', '44.02312874', '142.4134008');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1465, 1, '剣淵町', 'けんぶちちょう', '44.09576224', '142.3613267');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1468, 1, '下川町', 'しもかわちょう', '44.3025664', '142.6352023');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1469, 1, '美深町', 'びふかちょう', '44.48102079', '142.3430577');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1470, 1, '音威子府村', 'おといねっぷむら', '44.72504179', '142.2622139');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1471, 1, '中川町', 'なかがわちょう', '44.81138889', '142.0713889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1472, 1, '幌加内町', 'ほろかないちょう', '44.00979823', '142.1538298');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1481, 1, '増毛町', 'ましけちょう', '43.85605933', '141.5249105');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1482, 1, '小平町', 'おびらちょう', '44.01546152', '141.6627616');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1483, 1, '苫前町', 'とままえちょう', '44.30614209', '141.6529088');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1484, 1, '羽幌町', 'はぼろちょう', '44.36054972', '141.6973205');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1485, 1, '初山別村', 'しょさんべつむら', '44.53214682', '141.7663169');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1486, 1, '遠別町', 'えんべつちょう', '44.7225084', '141.7923268');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1487, 1, '天塩町', 'てしおちょう', '44.88817257', '141.7453521');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1511, 1, '猿払村', 'さるふつむら', '45.3306092', '142.1089722');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1512, 1, '浜頓別町', 'はまとんべつちょう', '45.1237794', '142.3597348');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1513, 1, '中頓別町', 'なかとんべつちょう', '44.96976136', '142.2867365');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1514, 1, '枝幸町', 'えさしちょう', '44.93873333', '142.5814043');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1516, 1, '豊富町', 'とよとみちょう', '45.10285676', '141.7775026');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1517, 1, '礼文町', 'れぶんちょう', '45.30308199', '141.0477509');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1518, 1, '利尻町', 'りしりちょう', '45.18701663', '141.1395796');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1519, 1, '利尻富士町', 'りしりふじちょう', '45.2475', '141.2147222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1520, 1, '幌延町', 'ほろのべちょう', '45.01777778', '141.8494444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1543, 1, '美幌町', 'びほろちょう', '43.82371383', '144.1071991');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1544, 1, '津別町', 'つべつちょう', '43.70633069', '144.0248025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1545, 1, '斜里町', 'しゃりちょう', '43.91138889', '144.6708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1546, 1, '清里町', 'きよさとちょう', '43.83523767', '144.5946817');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1547, 1, '小清水町', 'こしみずちょう', '43.85674521', '144.4620985');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1549, 1, '訓子府町', 'くんねっぷちょう', '43.72536829', '143.7416617');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1550, 1, '置戸町', 'おけとちょう', '43.67638889', '143.5863889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1552, 1, '佐呂間町', 'さろまちょう', '44.01785206', '143.7747668');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1555, 1, '遠軽町', 'えんがるちょう', '44.06196432', '143.5280486');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1559, 1, '湧別町', 'ゆうべつちょう', '44.15160274', '143.573035');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1560, 1, '滝上町', 'たきのうえちょう', '44.19222222', '143.0777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1561, 1, '興部町', 'おこっぺちょう', '44.46985058', '143.1239513');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1562, 1, '西興部村', 'にしおこっぺむら', '44.32880793', '142.9444613');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1563, 1, '雄武町', 'おうむちょう', '44.58248425', '142.9618577');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1564, 1, '大空町', 'おおぞらちょう', '43.91194444', '144.1725');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1571, 1, '豊浦町', 'とようらちょう', '42.583409', '140.711966');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1575, 1, '壮瞥町', 'そうべつちょう', '42.55210949', '140.885836');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1578, 1, '白老町', 'しらおいちょう', '42.55131326', '141.3558661');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1581, 1, '厚真町', 'あつまちょう', '42.72363661', '141.8778914');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1584, 1, '洞爺湖町', 'とうやこちょう', '42.55111704', '140.7642741');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1585, 1, '安平町', 'あびらちょう', '42.76277778', '141.8180556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1586, 1, 'むかわ町', 'むかわちょう', '42.57474771', '141.9267449');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1601, 1, '日高町', 'ひだかちょう', '42.48033565', '142.0742968');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1602, 1, '平取町', 'びらとりちょう', '42.58514013', '142.1286988');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1604, 1, '新冠町', 'にいかっぷちょう', '42.36244309', '142.3184391');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1607, 1, '浦河町', 'うらかわちょう', '42.16834176', '142.7682026');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1608, 1, '様似町', 'さまにちょう', '42.12777778', '142.9338889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1609, 1, 'えりも町', 'えりもちょう', '42.01638889', '143.1483333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1610, 1, '新ひだか町', 'しんひだかちょう', '42.34125547', '142.3686044');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1631, 1, '音更町', 'おとふけちょう', '42.99413757', '143.1978925');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1632, 1, '士幌町', 'しほろちょう', '43.16805004', '143.2414601');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1633, 1, '上士幌町', 'かみしほろちょう', '43.23263469', '143.2961787');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1634, 1, '鹿追町', 'しかおいちょう', '43.09887653', '142.9889704');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1635, 1, '新得町', 'しんとくちょう', '43.07975642', '142.8389096');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1636, 1, '清水町', 'しみずちょう', '43.01143823', '142.8845411');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1637, 1, '芽室町', 'めむろちょう', '42.91194444', '143.0508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1638, 1, '中札内村', 'なかさつないむら', '42.69757305', '143.1323696');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1639, 1, '更別村', 'さらべつむら', '42.65038621', '143.1878416');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1641, 1, '大樹町', 'たいきちょう', '42.4975', '143.2788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1642, 1, '広尾町', 'ひろおちょう', '42.28593132', '143.3116286');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1643, 1, '幕別町', 'まくべつちょう', '42.9082019', '143.3561006');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1644, 1, '池田町', 'いけだちょう', '42.92900742', '143.4485303');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1645, 1, '豊頃町', 'とよころちょう', '42.80102049', '143.5058896');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1646, 1, '本別町', 'ほんべつちょう', '43.12467344', '143.6105661');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1647, 1, '足寄町', 'あしょろちょう', '43.24480211', '143.5540526');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1648, 1, '陸別町', 'りくべつちょう', '43.46888889', '143.7472222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1649, 1, '浦幌町', 'うらほろちょう', '42.80895698', '143.6585781');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1661, 1, '釧路町', 'くしろちょう', '42.99617231', '144.4660793');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1662, 1, '厚岸町', 'あっけしちょう', '43.05194444', '144.8475');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1663, 1, '浜中町', 'はまなかちょう', '43.07711177', '145.1295118');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1664, 1, '標茶町', 'しべちゃちょう', '43.30334699', '144.6006586');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1665, 1, '弟子屈町', 'てしかがちょう', '43.48521336', '144.4593251');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1667, 1, '鶴居村', 'つるいむら', '43.23007174', '144.3211866');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1668, 1, '白糠町', 'しらぬかちょう', '42.95616451', '144.0717316');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1691, 1, '別海町', 'べつかいちょう', '43.3940015', '145.1173283');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1692, 1, '中標津町', 'なかしべつちょう', '43.55520483', '144.971387');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1693, 1, '標津町', 'しべつちょう', '43.66126914', '145.1313251');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(1694, 1, '羅臼町', 'らうすちょう', '44.02194444', '145.1894444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2201, 2, '青森市', 'あおもりし', '40.82222222', '140.7475');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2202, 2, '弘前市', 'ひろさきし', '40.60305556', '140.4641667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2203, 2, '八戸市', 'はちのへし', '40.51222222', '141.4883333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2204, 2, '黒石市', 'くろいしし', '40.64277778', '140.5944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2205, 2, '五所川原市', 'ごしょがわらし', '40.80805556', '140.44');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2206, 2, '十和田市', 'とわだし', '40.61277778', '141.2058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2207, 2, '三沢市', 'みさわし', '40.68333333', '141.3688889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2208, 2, 'むつ市', 'むつし', '41.29305556', '141.1830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2209, 2, 'つがる市', 'つがるし', '40.80888889', '140.38');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2210, 2, '平川市', 'ひらかわし', '40.58416667', '140.5663889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2301, 2, '平内町', 'ひらないまち', '40.92611111', '140.9561111');