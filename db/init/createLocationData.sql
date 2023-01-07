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
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2303, 2, '今別町', 'いまべつまち', '41.18194444', '140.4816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2304, 2, '蓬田村', 'よもぎたむら', '40.97194444', '140.6558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2307, 2, '外ヶ浜町', 'そとがはままち', '41.04333333', '140.6325');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2321, 2, '鰺ヶ沢町', 'あじがさわまち', '40.78', '140.2088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2323, 2, '深浦町', 'ふかうらまち', '40.64805556', '139.9277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2343, 2, '西目屋村', 'にしめやむら', '40.57694444', '140.2963889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2361, 2, '藤崎町', 'ふじさきまち', '40.65611111', '140.5025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2362, 2, '大鰐町', 'おおわにまち', '40.51833333', '140.5677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2367, 2, '田舎館村', 'いなかだてむら', '40.63166667', '140.55');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2381, 2, '板柳町', 'いたやなぎまち', '40.69611111', '140.4575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2384, 2, '鶴田町', 'つるたまち', '40.75888889', '140.4286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2387, 2, '中泊町', 'なかどまりまち', '40.96527778', '140.4397222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2401, 2, '野辺地町', 'のへじまち', '40.86444444', '141.1286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2402, 2, '七戸町', 'しちのへまち', '40.74472222', '141.1577778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2405, 2, '六戸町', 'ろくのへまち', '40.60972222', '141.3247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2406, 2, '横浜町', 'よこはままち', '41.08333333', '141.2475');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2408, 2, '東北町', 'とうほくまち', '40.72805556', '141.2577778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2411, 2, '六ヶ所村', 'ろっかしょむら', '40.9675', '141.3744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2412, 2, 'おいらせ町', 'おいらせちょう', '40.59916667', '141.3977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2423, 2, '大間町', 'おおままち', '41.52666667', '140.9072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2424, 2, '東通村', 'ひがしどおりむら', '41.27805556', '141.3294444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2425, 2, '風間浦村', 'かざまうらむら', '41.4875', '140.9955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2426, 2, '佐井村', 'さいむら', '41.42972222', '140.8591667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2441, 2, '三戸町', 'さんのへまち', '40.37833333', '141.2586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2442, 2, '五戸町', 'ごのへまち', '40.53111111', '141.3077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2443, 2, '田子町', 'たっこまち', '40.34', '141.1519444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2445, 2, '南部町', 'なんぶちょう', '40.46694444', '141.3816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2446, 2, '階上町', 'はしかみちょう', '40.4525', '141.6211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(2450, 2, '新郷村', 'しんごうむら', '40.46583333', '141.1733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3201, 3, '盛岡市', 'もりおかし', '39.70194444', '141.1541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3202, 3, '宮古市', 'みやこし', '39.64138889', '141.9572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3203, 3, '大船渡市', 'おおふなとし', '39.08222222', '141.7083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3205, 3, '花巻市', 'はなまきし', '39.38861111', '141.1166667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3206, 3, '北上市', 'きたかみし', '39.28666667', '141.1130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3207, 3, '久慈市', 'くじし', '40.19027778', '141.7752778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3208, 3, '遠野市', 'とおのし', '39.3275', '141.5336111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3209, 3, '一関市', 'いちのせきし', '38.93444444', '141.1263889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3210, 3, '陸前高田市', 'りくぜんたかたし', '39.01527778', '141.6294444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3211, 3, '釜石市', 'かまいしし', '39.27583333', '141.8855556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3213, 3, '二戸市', 'にのへし', '40.27111111', '141.3047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3214, 3, '八幡平市', 'はちまんたいし', '39.92638889', '141.0952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3215, 3, '奥州市', 'おうしゅうし', '39.14444444', '141.1388889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3216, 3, '滝沢市', 'たきざわし', '39.73472222', '141.0769444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3301, 3, '雫石町', 'しずくいしちょう', '39.69611111', '140.9755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3302, 3, '葛巻町', 'くずまきまち', '40.03972222', '141.4363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3303, 3, '岩手町', 'いわてまち', '39.9725', '141.2125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3321, 3, '紫波町', 'しわちょう', '39.55472222', '141.1677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3322, 3, '矢巾町', 'やはばちょう', '39.60583333', '141.1430556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3366, 3, '西和賀町', 'にしわがまち', '39.31777778', '140.7791667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3381, 3, '金ケ崎町', 'かねがさきちょう', '39.19555556', '141.1161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3402, 3, '平泉町', 'ひらいずみちょう', '38.98666667', '141.1141667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3441, 3, '住田町', 'すみたちょう', '39.14194444', '141.5758333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3461, 3, '大槌町', 'おおつちちょう', '39.35972222', '141.9063889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3482, 3, '山田町', 'やまだまち', '39.4675', '141.9488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3483, 3, '岩泉町', 'いわいずみちょう', '39.84305556', '141.7966667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3484, 3, '田野畑村', 'たのはたむら', '39.93027778', '141.8888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3485, 3, '普代村', 'ふだいむら', '40.00527778', '141.8861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3501, 3, '軽米町', 'かるまいまち', '40.32666667', '141.4605556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3503, 3, '野田村', 'のだむら', '40.11', '141.8180556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3506, 3, '九戸村', 'くのへむら', '40.21138889', '141.4188889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3507, 3, '洋野町', 'ひろのちょう', '40.40861111', '141.7180556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(3524, 3, '一戸町', 'いちのへまち', '40.21305556', '141.2952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4100, 4, '仙台市', 'せんだいし', '38.26805556', '140.8697222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4101, 4, '仙台市 青葉区', 'せんだいし あおばく', '38.26916667', '140.8705556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4102, 4, '仙台市 宮城野区', 'せんだいし みやぎのく', '38.26638889', '140.9102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4103, 4, '仙台市 若林区', 'せんだいし わかばやしく', '38.24416667', '140.9008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4104, 4, '仙台市 太白区', 'せんだいし たいはくく', '38.22444444', '140.8772222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4105, 4, '仙台市 泉区', 'せんだいし いずみく', '38.32638889', '140.8813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4202, 4, '石巻市', 'いしのまきし', '38.43416667', '141.3027778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4203, 4, '塩竈市', 'しおがまし', '38.31444444', '141.0222222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4205, 4, '気仙沼市', 'けせんぬまし', '38.90833333', '141.57');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4206, 4, '白石市', 'しろいしし', '38.00222222', '140.6197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4207, 4, '名取市', 'なとりし', '38.17166667', '140.8919444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4208, 4, '角田市', 'かくだし', '37.97722222', '140.7819444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4209, 4, '多賀城市', 'たがじょうし', '38.29388889', '141.0044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4211, 4, '岩沼市', 'いわぬまし', '38.10444444', '140.87');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4212, 4, '登米市', 'とめし', '38.69194444', '141.1877778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4213, 4, '栗原市', 'くりはらし', '38.73027778', '141.0213889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4214, 4, '東松島市', 'ひがしまつしまし', '38.42638889', '141.2105556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4215, 4, '大崎市', 'おおさきし', '38.57722222', '140.9555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4216, 4, '富谷市', 'とみやし', '38.4', '140.8952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4301, 4, '蔵王町', 'ざおうまち', '38.09805556', '140.6588889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4302, 4, '七ヶ宿町', 'しちかしゅくまち', '37.99305556', '140.4416667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4321, 4, '大河原町', 'おおがわらまち', '38.04944444', '140.7308333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4322, 4, '村田町', 'むらたまち', '38.11861111', '140.7225');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4323, 4, '柴田町', 'しばたまち', '38.05638889', '140.7658333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4324, 4, '川崎町', 'かわさきまち', '38.17777778', '140.6436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4341, 4, '丸森町', 'まるもりまち', '37.91138889', '140.7655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4361, 4, '亘理町', 'わたりちょう', '38.03777778', '140.8527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4362, 4, '山元町', 'やまもとちょう', '37.9625', '140.8777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4401, 4, '松島町', 'まつしままち', '38.38138889', '141.0691667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4404, 4, '七ヶ浜町', 'しちがはままち', '38.30472222', '141.0594444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4406, 4, '利府町', 'りふちょう', '38.33027778', '140.9755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4421, 4, '大和町', 'たいわちょう', '38.4375', '140.8863889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4422, 4, '大郷町', 'おおさとちょう', '38.42444444', '141.0044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4424, 4, '大衡村', 'おおひらむら', '38.4675', '140.8802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4444, 4, '色麻町', 'しかまちょう', '38.54888889', '140.85');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4445, 4, '加美町', 'かみまち', '38.57194444', '140.855');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4501, 4, '涌谷町', 'わくやちょう', '38.53972222', '141.1283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4505, 4, '美里町', 'みさとまち', '38.54444444', '141.0569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4581, 4, '女川町', 'おながわちょう', '38.44555556', '141.4444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(4606, 4, '南三陸町', 'みなみさんりくちょう', '38.67777778', '141.4463889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5201, 5, '秋田市', 'あきたし', '39.71972222', '140.1025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5202, 5, '能代市', 'のしろし', '40.21222222', '140.0266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5203, 5, '横手市', 'よこてし', '39.31055556', '140.5533333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5204, 5, '大館市', 'おおだてし', '40.27166667', '140.5647222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5206, 5, '男鹿市', 'おがし', '39.88666667', '139.8477778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5207, 5, '湯沢市', 'ゆざわし', '39.16388889', '140.495');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5209, 5, '鹿角市', 'かづのし', '40.21583333', '140.7883333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5210, 5, '由利本荘市', 'ゆりほんじょうし', '39.38583333', '140.0488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5211, 5, '潟上市', 'かたがみし', '39.88333333', '139.9888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5212, 5, '大仙市', 'だいせんし', '39.45305556', '140.4755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5213, 5, '北秋田市', 'きたあきたし', '40.22611111', '140.3708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5214, 5, 'にかほ市', 'にかほし', '39.20305556', '139.9077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5215, 5, '仙北市', 'せんぼくし', '39.7', '140.7305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5303, 5, '小坂町', 'こさかまち', '40.32777778', '140.7469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5327, 5, '上小阿仁村', 'かみこあにむら', '40.06333333', '140.2958333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5346, 5, '藤里町', 'ふじさとまち', '40.27833333', '140.2619444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5348, 5, '三種町', 'みたねちょう', '40.10166667', '140.005');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5349, 5, '八峰町', 'はっぽうちょう', '40.31888889', '140.0386111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5361, 5, '五城目町', 'ごじょうめまち', '39.94416667', '140.1116667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5363, 5, '八郎潟町', 'はちろうがたまち', '39.94944444', '140.0733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5366, 5, '井川町', 'いかわまち', '39.91416667', '140.0816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5368, 5, '大潟村', 'おおがたむら', '40.01777778', '139.96');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5434, 5, '美郷町', 'みさとちょう', '39.46166667', '140.5825');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5463, 5, '羽後町', 'うごまち', '39.19944444', '140.4130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(5464, 5, '東成瀬村', 'ひがしなるせむら', '39.17888889', '140.6488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6201, 6, '山形市', 'やまがたし', '38.25555556', '140.3397222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6202, 6, '米沢市', 'よねざわし', '37.92222222', '140.1169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6203, 6, '鶴岡市', 'つるおかし', '38.72722222', '139.8266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6204, 6, '酒田市', 'さかたし', '38.91444444', '139.8363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6205, 6, '新庄市', 'しんじょうし', '38.76472222', '140.3019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6206, 6, '寒河江市', 'さがえし', '38.38111111', '140.2761111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6207, 6, '上山市', 'かみのやまし', '38.14972222', '140.2677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6208, 6, '村山市', 'むらやまし', '38.48361111', '140.3805556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6209, 6, '長井市', 'ながいし', '38.10777778', '140.0405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6210, 6, '天童市', 'てんどうし', '38.36222222', '140.3783333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6211, 6, '東根市', 'ひがしねし', '38.43138889', '140.3911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6212, 6, '尾花沢市', 'おばなざわし', '38.60083333', '140.4058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6213, 6, '南陽市', 'なんようし', '38.05527778', '140.1483333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6301, 6, '山辺町', 'やまのべまち', '38.28916667', '140.2625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6302, 6, '中山町', 'なかやままち', '38.33333333', '140.2830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6321, 6, '河北町', 'かほくちょう', '38.42638889', '140.3144444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6322, 6, '西川町', 'にしかわまち', '38.42666667', '140.1477778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6323, 6, '朝日町', 'あさひまち', '38.29916667', '140.1458333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6324, 6, '大江町', 'おおえまち', '38.38083333', '140.2066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6341, 6, '大石田町', 'おおいしだまち', '38.59388889', '140.3727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6361, 6, '金山町', 'かねやままち', '38.88333333', '140.3394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6362, 6, '最上町', 'もがみまち', '38.75861111', '140.5194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6363, 6, '舟形町', 'ふながたまち', '38.69166667', '140.32');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6364, 6, '真室川町', 'まむろがわまち', '38.85777778', '140.2525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6365, 6, '大蔵村', 'おおくらむら', '38.70416667', '140.2305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6366, 6, '鮭川村', 'さけがわむら', '38.79611111', '140.2216667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6367, 6, '戸沢村', 'とざわむら', '38.73777778', '140.1436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6381, 6, '高畠町', 'たかはたまち', '38.00277778', '140.1891667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6382, 6, '川西町', 'かわにしまち', '38.00444444', '140.0458333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6401, 6, '小国町', 'おぐにまち', '38.06138889', '139.7433333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6402, 6, '白鷹町', 'しらたかまち', '38.18305556', '140.0986111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6403, 6, '飯豊町', 'いいでまち', '38.04583333', '139.9875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6426, 6, '三川町', 'みかわまち', '38.79444444', '139.8497222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6428, 6, '庄内町', 'しょうないまち', '38.84972222', '139.9047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(6461, 6, '遊佐町', 'ゆざまち', '39.01472222', '139.9075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7201, 7, '福島市', 'ふくしまし', '37.76083333', '140.4747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7202, 7, '会津若松市', 'あいづわかまつし', '37.49472222', '139.9297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7203, 7, '郡山市', 'こおりやまし', '37.40055556', '140.3597222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7204, 7, 'いわき市', 'いわきし', '37.05055556', '140.8877778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7205, 7, '白河市', 'しらかわし', '37.12638889', '140.2108333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7207, 7, '須賀川市', 'すかがわし', '37.28666667', '140.3727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7208, 7, '喜多方市', 'きたかたし', '37.65111111', '139.8744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7209, 7, '相馬市', 'そうまし', '37.79666667', '140.9197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7210, 7, '二本松市', 'にほんまつし', '37.58472222', '140.4313889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7211, 7, '田村市', 'たむらし', '37.44138889', '140.5691667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7212, 7, '南相馬市', 'みなみそうまし', '37.64222222', '140.9572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7213, 7, '伊達市', 'だてし', '37.81888889', '140.5630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7214, 7, '本宮市', 'もとみやし', '37.51333333', '140.3938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7301, 7, '桑折町', 'こおりまち', '37.84944444', '140.5163889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7303, 7, '国見町', 'くにみまち', '37.87694444', '140.5494444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7308, 7, '川俣町', 'かわまたまち', '37.665', '140.5983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7322, 7, '大玉村', 'おおたまむら', '37.53444444', '140.3711111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7342, 7, '鏡石町', 'かがみいしまち', '37.25277778', '140.3436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7344, 7, '天栄村', 'てんえいむら', '37.25527778', '140.2472222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7362, 7, '下郷町', 'しもごうまち', '37.25555556', '139.8722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7364, 7, '檜枝岐村', 'ひのえまたむら', '37.02416667', '139.3888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7367, 7, '只見町', 'ただみまち', '37.34861111', '139.3158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7368, 7, '南会津町', 'みなみあいづまち', '37.20027778', '139.7733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7402, 7, '北塩原村', 'きたしおばらむら', '37.65583333', '139.9377778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7405, 7, '西会津町', 'にしあいづまち', '37.58888889', '139.6475');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7407, 7, '磐梯町', 'ばんだいまち', '37.56194444', '139.9883333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7408, 7, '猪苗代町', 'いなわしろまち', '37.55777778', '140.1047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7421, 7, '会津坂下町', 'あいづばんげまち', '37.56138889', '139.8216667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7422, 7, '湯川村', 'ゆがわむら', '37.56583333', '139.8866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7423, 7, '柳津町', 'やないづまち', '37.52611111', '139.7194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7444, 7, '三島町', 'みしままち', '37.47027778', '139.6444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7445, 7, '金山町', 'かねやままち', '37.45388889', '139.5247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7446, 7, '昭和村', 'しょうわむら', '37.33583333', '139.6105556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7447, 7, '会津美里町', 'あいづみさとまち', '37.46', '139.8411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7461, 7, '西郷村', 'にしごうむら', '37.14194444', '140.1552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7464, 7, '泉崎村', 'いずみざきむら', '37.15694444', '140.2952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7465, 7, '中島村', 'なかじまむら', '37.14861111', '140.3502778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7466, 7, '矢吹町', 'やぶきまち', '37.20111111', '140.3386111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7481, 7, '棚倉町', 'たなぐらまち', '37.02972222', '140.3797222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7482, 7, '矢祭町', 'やまつりまち', '36.87138889', '140.4247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7483, 7, '塙町', 'はなわまち', '36.95722222', '140.4097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7484, 7, '鮫川村', 'さめがわむら', '37.0425', '140.5097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7501, 7, '石川町', 'いしかわまち', '37.14416667', '140.4522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7502, 7, '玉川村', 'たまかわむら', '37.21083333', '140.4088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7503, 7, '平田村', 'ひらたむら', '37.21805556', '140.5702778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7504, 7, '浅川町', 'あさかわまち', '37.08083333', '140.4127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7505, 7, '古殿町', 'ふるどのまち', '37.08916667', '140.5558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7521, 7, '三春町', 'みはるまち', '37.44111111', '140.4927778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7522, 7, '小野町', 'おのまち', '37.28694444', '140.6263889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7541, 7, '広野町', 'ひろのまち', '37.21444444', '140.9947222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7542, 7, '楢葉町', 'ならはまち', '37.2825', '140.9936111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7543, 7, '富岡町', 'とみおかまち', '37.34555556', '141.0086111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7544, 7, '川内村', 'かわうちむら', '37.3375', '140.8094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7545, 7, '大熊町', 'おおくままち', '37.40444444', '140.9836111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7546, 7, '双葉町', 'ふたばまち', '37.44916667', '141.0125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7547, 7, '浪江町', 'なみえまち', '37.49472222', '141.0008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7548, 7, '葛尾村', 'かつらおむら', '37.50361111', '140.7644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7561, 7, '新地町', 'しんちまち', '37.87611111', '140.9194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(7564, 7, '飯舘村', 'いいたてむら', '37.67916667', '140.7355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8201, 8, '水戸市', 'みとし', '36.36583333', '140.4713889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8202, 8, '日立市', 'ひたちし', '36.59916667', '140.6516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8203, 8, '土浦市', 'つちうらし', '36.07194444', '140.1961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8204, 8, '古河市', 'こがし', '36.17888889', '139.7558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8205, 8, '石岡市', 'いしおかし', '36.19083333', '140.2872222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8207, 8, '結城市', 'ゆうきし', '36.30527778', '139.8775');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8208, 8, '龍ケ崎市', 'りゅうがさきし', '35.91166667', '140.1822222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8210, 8, '下妻市', 'しもつまし', '36.18444444', '139.9675');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8211, 8, '常総市', 'じょうそうし', '36.02361111', '139.9938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8212, 8, '常陸太田市', 'ひたちおおたし', '36.53833333', '140.5311111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8214, 8, '高萩市', 'たかはぎし', '36.71361111', '140.7097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8215, 8, '北茨城市', 'きたいばらきし', '36.80194444', '140.7511111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8216, 8, '笠間市', 'かさまし', '36.345', '140.3041667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8217, 8, '取手市', 'とりでし', '35.91138889', '140.0502778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8219, 8, '牛久市', 'うしくし', '35.97944444', '140.1497222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8220, 8, 'つくば市', 'つくばし', '36.08361111', '140.0763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8221, 8, 'ひたちなか市', 'ひたちなかし', '36.39638889', '140.5344444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8222, 8, '鹿嶋市', 'かしまし', '35.96583333', '140.645');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8223, 8, '潮来市', 'いたこし', '35.94722222', '140.5552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8224, 8, '守谷市', 'もりやし', '35.95138889', '139.9755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8225, 8, '常陸大宮市', 'ひたちおおみやし', '36.5425', '140.4108333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8226, 8, '那珂市', 'なかし', '36.4575', '140.4866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8227, 8, '筑西市', 'ちくせいし', '36.30722222', '139.9830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8228, 8, '坂東市', 'ばんどうし', '36.04833333', '139.8888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8229, 8, '稲敷市', 'いなしきし', '35.95666667', '140.3238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8230, 8, 'かすみがうら市', 'かすみがうらし', '36.15194444', '140.2372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8231, 8, '桜川市', 'さくらがわし', '36.32722222', '140.0905556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8232, 8, '神栖市', 'かみすし', '35.89', '140.6647222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8233, 8, '行方市', 'なめがたし', '35.99027778', '140.4891667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8234, 8, '鉾田市', 'ほこたし', '36.15861111', '140.5163889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8235, 8, 'つくばみらい市', 'つくばみらいし', '35.96305556', '140.0372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8236, 8, '小美玉市', 'おみたまし', '36.23944444', '140.3525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8302, 8, '茨城町', 'いばらきまち', '36.28694444', '140.4247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8309, 8, '大洗町', 'おおあらいまち', '36.31333333', '140.575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8310, 8, '城里町', 'しろさとまち', '36.47916667', '140.3763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8341, 8, '東海村', 'とうかいむら', '36.47305556', '140.5661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8364, 8, '大子町', 'だいごまち', '36.76805556', '140.3552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8442, 8, '美浦村', 'みほむら', '36.00444444', '140.3019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8443, 8, '阿見町', 'あみまち', '36.03083333', '140.215');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8447, 8, '河内町', 'かわちまち', '35.88472222', '140.2444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8521, 8, '八千代町', 'やちよまち', '36.18138889', '139.8913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8542, 8, '五霞町', 'ごかまち', '36.11444444', '139.7452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8546, 8, '境町', 'さかいまち', '36.10861111', '139.795');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(8564, 8, '利根町', 'とねまち', '35.85777778', '140.1394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9201, 9, '宇都宮市', 'うつのみやし', '36.55527778', '139.8827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9202, 9, '足利市', 'あしかがし', '36.34027778', '139.4497222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9203, 9, '栃木市', 'とちぎし', '36.38138889', '139.7302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9204, 9, '佐野市', 'さのし', '36.31444444', '139.5783333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9205, 9, '鹿沼市', 'かぬまし', '36.56722222', '139.745');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9206, 9, '日光市', 'にっこうし', '36.72', '139.6983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9208, 9, '小山市', 'おやまし', '36.31472222', '139.8002778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9209, 9, '真岡市', 'もおかし', '36.44027778', '140.0130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9210, 9, '大田原市', 'おおたわらし', '36.87083333', '140.0155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9211, 9, '矢板市', 'やいたし', '36.80666667', '139.9241667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9213, 9, '那須塩原市', 'なすしおばらし', '36.96166667', '140.0461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9214, 9, 'さくら市', 'さくらし', '36.68527778', '139.9663889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9215, 9, '那須烏山市', 'なすからすやまし', '36.65694444', '140.1516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9216, 9, '下野市', 'しもつけし', '36.38722222', '139.8422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9301, 9, '上三川町', 'かみのかわまち', '36.43916667', '139.91');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9342, 9, '益子町', 'ましこまち', '36.4675', '140.0930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9343, 9, '茂木町', 'もてぎまち', '36.53222222', '140.1875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9344, 9, '市貝町', 'いちかいまち', '36.54333333', '140.1022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9345, 9, '芳賀町', 'はがまち', '36.54805556', '140.0580556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9361, 9, '壬生町', 'みぶまち', '36.42722222', '139.8038889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9364, 9, '野木町', 'のぎまち', '36.23305556', '139.7408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9384, 9, '塩谷町', 'しおやまち', '36.7775', '139.8505556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9386, 9, '高根沢町', 'たかねざわまち', '36.63111111', '139.9866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9407, 9, '那須町', 'なすまち', '37.01972222', '140.1211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(9411, 9, '那珂川町', 'なかがわまち', '36.73833333', '140.1713889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10201, 10, '前橋市', 'まえばしし', '36.38916667', '139.0636111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10202, 10, '高崎市', 'たかさきし', '36.32194444', '139.0036111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10203, 10, '桐生市', 'きりゅうし', '36.40527778', '139.3305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10204, 10, '伊勢崎市', 'いせさきし', '36.31138889', '139.1966667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10205, 10, '太田市', 'おおたし', '36.29166667', '139.3758333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10206, 10, '沼田市', 'ぬまたし', '36.64583333', '139.0441667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10207, 10, '館林市', 'たてばやしし', '36.245', '139.5422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10208, 10, '渋川市', 'しぶかわし', '36.48944444', '139.0005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10209, 10, '藤岡市', 'ふじおかし', '36.25861111', '139.0747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10210, 10, '富岡市', 'とみおかし', '36.26', '138.89');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10211, 10, '安中市', 'あんなかし', '36.32638889', '138.8872222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10212, 10, 'みどり市', 'みどりし', '36.39472222', '139.2811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10344, 10, '榛東村', 'しんとうむら', '36.44027778', '138.9813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10345, 10, '吉岡町', 'よしおかまち', '36.4475', '139.0102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10366, 10, '上野村', 'うえのむら', '36.08333333', '138.7772222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10367, 10, '神流町', 'かんなまち', '36.11611111', '138.9169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10382, 10, '下仁田町', 'しもにたまち', '36.2125', '138.7891667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10383, 10, '南牧村', 'なんもくむら', '36.15861111', '138.7113889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10384, 10, '甘楽町', 'かんらまち', '36.24305556', '138.9219444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10421, 10, '中之条町', 'なかのじょうまち', '36.59', '138.8411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10424, 10, '長野原町', 'ながのはらまち', '36.55222222', '138.6375');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10425, 10, '嬬恋村', 'つまごいむら', '36.51666667', '138.5302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10426, 10, '草津町', 'くさつまち', '36.62055556', '138.5961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10428, 10, '高山村', 'たかやまむら', '36.62083333', '138.9436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10429, 10, '東吾妻町', 'ひがしあがつままち', '36.57138889', '138.8255556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10443, 10, '片品村', 'かたしなむら', '36.7725', '139.2252778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10444, 10, '川場村', 'かわばむら', '36.69472222', '139.1066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10448, 10, '昭和村', 'しょうわむら', '36.63972222', '139.0658333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10449, 10, 'みなかみ町', 'みなかみまち', '36.67888889', '138.9991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10464, 10, '玉村町', 'たまむらまち', '36.30444444', '139.115');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10521, 10, '板倉町', 'いたくらまち', '36.22305556', '139.6102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10522, 10, '明和町', 'めいわまち', '36.21138889', '139.5341667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10523, 10, '千代田町', 'ちよだまち', '36.21777778', '139.4425');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10524, 10, '大泉町', 'おおいずみまち', '36.24777778', '139.405');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(10525, 10, '邑楽町', 'おうらまち', '36.2525', '139.4625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11100, 11, 'さいたま市', 'さいたまし', '35.86166667', '139.6452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11101, 11, 'さいたま市 西区', 'さいたまし にしく', '35.925', '139.5797222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11102, 11, 'さいたま市 北区', 'さいたまし きたく', '35.93083333', '139.62');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11103, 11, 'さいたま市 大宮区', 'さいたまし おおみやく', '35.90611111', '139.6286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11104, 11, 'さいたま市 見沼区', 'さいたまし みぬまく', '35.93527778', '139.6544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11105, 11, 'さいたま市 中央区', 'さいたまし ちゅうおうく', '35.88388889', '139.6261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11106, 11, 'さいたま市 桜区', 'さいたまし さくらく', '35.85694444', '139.6094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11107, 11, 'さいたま市 浦和区', 'さいたまし うらわく', '35.86166667', '139.6452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11108, 11, 'さいたま市 南区', 'さいたまし みなみく', '35.84638889', '139.6480556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11109, 11, 'さいたま市 緑区', 'さいたまし みどりく', '35.87111111', '139.6838889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11110, 11, 'さいたま市 岩槻区', 'さいたまし いわつきく', '35.94972146', '139.6941694');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11201, 11, '川越市', 'かわごえし', '35.925', '139.4858333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11202, 11, '熊谷市', 'くまがやし', '36.14722222', '139.3886111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11203, 11, '川口市', 'かわぐちし', '35.80777778', '139.7241667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11206, 11, '行田市', 'ぎょうだし', '36.13888889', '139.4558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11207, 11, '秩父市', 'ちちぶし', '35.99166667', '139.0855556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11208, 11, '所沢市', 'ところざわし', '35.79944444', '139.4688889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11209, 11, '飯能市', 'はんのうし', '35.85583333', '139.3277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11210, 11, '加須市', 'かぞし', '36.13138889', '139.6019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11211, 11, '本庄市', 'ほんじょうし', '36.24388889', '139.1902778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11212, 11, '東松山市', 'ひがしまつやまし', '36.04222222', '139.4');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11214, 11, '春日部市', 'かすかべし', '35.97527778', '139.7525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11215, 11, '狭山市', 'さやまし', '35.85305556', '139.4122222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11216, 11, '羽生市', 'はにゅうし', '36.17277778', '139.5486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11217, 11, '鴻巣市', 'こうのすし', '36.06583333', '139.5222222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11218, 11, '深谷市', 'ふかやし', '36.1975', '139.2813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11219, 11, '上尾市', 'あげおし', '35.9775', '139.5933333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11221, 11, '草加市', 'そうかし', '35.82555556', '139.8055556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11222, 11, '越谷市', 'こしがやし', '35.89111111', '139.7908333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11223, 11, '蕨市', 'わらびし', '35.82555556', '139.6794444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11224, 11, '戸田市', 'とだし', '35.8175', '139.6777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11225, 11, '入間市', 'いるまし', '35.83583333', '139.3911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11227, 11, '朝霞市', 'あさかし', '35.79722222', '139.5936111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11228, 11, '志木市', 'しきし', '35.83666667', '139.5802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11229, 11, '和光市', 'わこうし', '35.78138889', '139.6058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11230, 11, '新座市', 'にいざし', '35.79333333', '139.5652778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11231, 11, '桶川市', 'おけがわし', '36.00277778', '139.5583333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11232, 11, '久喜市', 'くきし', '36.06222222', '139.6669444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11233, 11, '北本市', 'きたもとし', '36.02722222', '139.5302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11234, 11, '八潮市', 'やしおし', '35.82277778', '139.8391667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11235, 11, '富士見市', 'ふじみし', '35.85666667', '139.5491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11237, 11, '三郷市', 'みさとし', '35.83027778', '139.8725');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11238, 11, '蓮田市', 'はすだし', '35.99416667', '139.6622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11239, 11, '坂戸市', 'さかどし', '35.95722222', '139.4030556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11240, 11, '幸手市', 'さってし', '36.07805556', '139.7258333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11241, 11, '鶴ヶ島市', 'つるがしまし', '35.93444444', '139.3930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11242, 11, '日高市', 'ひだかし', '35.90777778', '139.3391667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11243, 11, '吉川市', 'よしかわし', '35.89111111', '139.8413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11245, 11, 'ふじみ野市', 'ふじみのし', '35.87944444', '139.5197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11246, 11, '白岡市', 'しらおかし', '36.01888889', '139.6769444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11301, 11, '伊奈町', 'いなまち', '36', '139.6238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11324, 11, '三芳町', 'みよしまち', '35.82833333', '139.5266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11326, 11, '毛呂山町', 'もろやままち', '35.94166667', '139.3161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11327, 11, '越生町', 'おごせまち', '35.96444444', '139.2941667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11341, 11, '滑川町', 'なめがわまち', '36.06611111', '139.3608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11342, 11, '嵐山町', 'らんざんまち', '36.05666667', '139.3202778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11343, 11, '小川町', 'おがわまち', '36.05666667', '139.2619444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11346, 11, '川島町', 'かわじままち', '35.98138889', '139.4816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11347, 11, '吉見町', 'よしみまち', '36.04', '139.4538889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11348, 11, '鳩山町', 'はとやままち', '35.98166667', '139.3341667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11349, 11, 'ときがわ町', 'ときがわまち', '36.00861111', '139.2969444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11361, 11, '横瀬町', 'よこぜまち', '35.98722222', '139.1002778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11362, 11, '皆野町', 'みなのまち', '36.07083333', '139.0988889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11363, 11, '長瀞町', 'ながとろまち', '36.11472222', '139.11');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11365, 11, '小鹿野町', 'おがのまち', '36.01722222', '139.0086111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11369, 11, '東秩父村', 'ひがしちちぶむら', '36.05805556', '139.1947222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11381, 11, '美里町', 'みさとまち', '36.17722222', '139.1813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11383, 11, '神川町', 'かみかわまち', '36.21388889', '139.1019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11385, 11, '上里町', 'かみさとまち', '36.25194444', '139.1447222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11408, 11, '寄居町', 'よりいまち', '36.11833333', '139.1930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11442, 11, '宮代町', 'みやしろまち', '36.0225', '139.7227778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11464, 11, '杉戸町', 'すぎとまち', '36.02555556', '139.7366667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(11465, 11, '松伏町', 'まつぶしまち', '35.92583333', '139.8152778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12100, 12, '千葉市', 'ちばし', '35.60722222', '140.1063889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12101, 12, '千葉市 中央区', 'ちばし ちゅうおうく', '35.60888889', '140.1247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12102, 12, '千葉市 花見川区', 'ちばし はなみがわく', '35.66277778', '140.0691667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12103, 12, '千葉市 稲毛区', 'ちばし いなげく', '35.63638889', '140.1072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12104, 12, '千葉市 若葉区', 'ちばし わかばく', '35.63416667', '140.1555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12105, 12, '千葉市 緑区', 'ちばし みどりく', '35.56027778', '140.1763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12106, 12, '千葉市 美浜区', 'ちばし みはまく', '35.64027778', '140.0630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12202, 12, '銚子市', 'ちょうしし', '35.73472222', '140.8266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12203, 12, '市川市', 'いちかわし', '35.72194444', '139.9311111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12204, 12, '船橋市', 'ふなばしし', '35.69472222', '139.9825');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12205, 12, '館山市', 'たてやまし', '34.99666667', '139.87');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12206, 12, '木更津市', 'きさらづし', '35.37611111', '139.9169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12207, 12, '松戸市', 'まつどし', '35.78777778', '139.9030556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12208, 12, '野田市', 'のだし', '35.955', '139.8747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12210, 12, '茂原市', 'もばらし', '35.42833333', '140.2880556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12211, 12, '成田市', 'なりたし', '35.77666667', '140.3183333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12212, 12, '佐倉市', 'さくらし', '35.72388889', '140.2238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12213, 12, '東金市', 'とうがねし', '35.56', '140.3661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12215, 12, '旭市', 'あさひし', '35.72027778', '140.6466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12216, 12, '習志野市', 'ならしのし', '35.68083333', '140.0266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12217, 12, '柏市', 'かしわし', '35.86805556', '139.9763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12218, 12, '勝浦市', 'かつうらし', '35.1525', '140.3211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12219, 12, '市原市', 'いちはらし', '35.49805556', '140.1155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12220, 12, '流山市', 'ながれやまし', '35.85611111', '139.9025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12221, 12, '八千代市', 'やちよし', '35.7225', '140.0997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12222, 12, '我孫子市', 'あびこし', '35.86416667', '140.0283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12223, 12, '鴨川市', 'かもがわし', '35.11416667', '140.0988889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12224, 12, '鎌ケ谷市', 'かまがやし', '35.77694444', '140.0008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12225, 12, '君津市', 'きみつし', '35.33055556', '139.9025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12226, 12, '富津市', 'ふっつし', '35.30416667', '139.8569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12227, 12, '浦安市', 'うらやすし', '35.65361111', '139.9016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12228, 12, '四街道市', 'よつかいどうし', '35.67', '140.1683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12229, 12, '袖ケ浦市', 'そでがうらし', '35.43', '139.9547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12230, 12, '八街市', 'やちまたし', '35.66583333', '140.3183333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12231, 12, '印西市', 'いんざいし', '35.83222222', '140.1458333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12232, 12, '白井市', 'しろいし', '35.79166667', '140.0563889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12233, 12, '富里市', 'とみさとし', '35.72666667', '140.3430556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12234, 12, '南房総市', 'みなみぼうそうし', '35.04333333', '139.8402778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12235, 12, '匝瑳市', 'そうさし', '35.70777778', '140.5644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12236, 12, '香取市', 'かとりし', '35.89777778', '140.4991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12237, 12, '山武市', 'さんむし', '35.60277778', '140.4136111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12238, 12, 'いすみ市', 'いすみし', '35.25388889', '140.3852778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12239, 12, '大網白里市', 'おおあみしらさとし', '35.52166667', '140.3211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12322, 12, '酒々井町', 'しすいまち', '35.725', '140.2694444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12329, 12, '栄町', 'さかえまち', '35.84083333', '140.2438889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12342, 12, '神崎町', 'こうざきまち', '35.90166667', '140.4052778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12347, 12, '多古町', 'たこまち', '35.73555556', '140.4677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12349, 12, '東庄町', 'とうのしょうまち', '35.83722222', '140.6688889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12403, 12, '九十九里町', 'くじゅうくりまち', '35.535', '140.4405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12409, 12, '芝山町', 'しばやままち', '35.69305556', '140.4141667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12410, 12, '横芝光町', 'よこしばひかりまち', '35.66555556', '140.5041667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12421, 12, '一宮町', 'いちのみやまち', '35.37277778', '140.3688889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12422, 12, '睦沢町', 'むつざわまち', '35.36111111', '140.3191667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12423, 12, '長生村', 'ちょうせいむら', '35.41222222', '140.3541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12424, 12, '白子町', 'しらこまち', '35.45444444', '140.3744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12426, 12, '長柄町', 'ながらまち', '35.43111111', '140.2269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12427, 12, '長南町', 'ちょうなんまち', '35.38666667', '140.2372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12441, 12, '大多喜町', 'おおたきまち', '35.285', '140.2455556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12443, 12, '御宿町', 'おんじゅくまち', '35.19166667', '140.3486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(12463, 12, '鋸南町', 'きょなんまち', '35.11111111', '139.8355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13101, 13, '千代田区', 'ちよだく', '35.69388889', '139.7536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13102, 13, '中央区', 'ちゅうおうく', '35.67083333', '139.7722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13103, 13, '港区', 'みなとく', '35.65805556', '139.7516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13104, 13, '新宿区', 'しんじゅくく', '35.69388889', '139.7036111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13105, 13, '文京区', 'ぶんきょうく', '35.70805556', '139.7522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13106, 13, '台東区', 'たいとうく', '35.71277778', '139.78');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13107, 13, '墨田区', 'すみだく', '35.71055556', '139.8016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13108, 13, '江東区', 'こうとうく', '35.67305556', '139.8172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13109, 13, '品川区', 'しながわく', '35.60888889', '139.7302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13110, 13, '目黒区', 'めぐろく', '35.64138889', '139.6983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13111, 13, '大田区', 'おおたく', '35.56138889', '139.7161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13112, 13, '世田谷区', 'せたがやく', '35.64611111', '139.6530556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13113, 13, '渋谷区', 'しぶやく', '35.66388889', '139.6980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13114, 13, '中野区', 'なかのく', '35.7075', '139.6638889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13115, 13, '杉並区', 'すぎなみく', '35.69944444', '139.6363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13116, 13, '豊島区', 'としまく', '35.73222222', '139.7155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13117, 13, '北区', 'きたく', '35.75277778', '139.7336111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13118, 13, '荒川区', 'あらかわく', '35.73611111', '139.7833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13119, 13, '板橋区', 'いたばしく', '35.75111111', '139.7094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13120, 13, '練馬区', 'ねりまく', '35.73555556', '139.6522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13121, 13, '足立区', 'あだちく', '35.775', '139.8047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13122, 13, '葛飾区', 'かつしかく', '35.74333333', '139.8472222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13123, 13, '江戸川区', 'えどがわく', '35.70666667', '139.8683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13201, 13, '八王子市', 'はちおうじし', '35.66666667', '139.3158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13202, 13, '立川市', 'たちかわし', '35.71388888', '139.4077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13203, 13, '武蔵野市', 'むさしのし', '35.71777778', '139.5661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13204, 13, '三鷹市', 'みたかし', '35.68333333', '139.5594444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13205, 13, '青梅市', 'おうめし', '35.78777778', '139.2758333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13206, 13, '府中市', 'ふちゅうし', '35.66888889', '139.4777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13207, 13, '昭島市', 'あきしまし', '35.70555556', '139.3536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13208, 13, '調布市', 'ちょうふし', '35.65055556', '139.5408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13209, 13, '町田市', 'まちだし', '35.54861111', '139.4466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13210, 13, '小金井市', 'こがねいし', '35.69944444', '139.5030556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13211, 13, '小平市', 'こだいらし', '35.72861111', '139.4775');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13212, 13, '日野市', 'ひのし', '35.67138889', '139.395');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13213, 13, '東村山市', 'ひがしむらやまし', '35.75472222', '139.4686111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13214, 13, '国分寺市', 'こくぶんじし', '35.71083333', '139.4622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13215, 13, '国立市', 'くにたちし', '35.68388889', '139.4413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13218, 13, '福生市', 'ふっさし', '35.73861111', '139.3266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13219, 13, '狛江市', 'こまえし', '35.63472222', '139.5786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13220, 13, '東大和市', 'ひがしやまとし', '35.74555556', '139.4266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13221, 13, '清瀬市', 'きよせし', '35.78583333', '139.5263889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13222, 13, '東久留米市', 'ひがしくるめし', '35.75805556', '139.5297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13223, 13, '武蔵村山市', 'むさしむらやまし', '35.75472222', '139.3875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13224, 13, '多摩市', 'たまし', '35.63694444', '139.4463889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13225, 13, '稲城市', 'いなぎし', '35.63805556', '139.5047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13227, 13, '羽村市', 'はむらし', '35.76722222', '139.3111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13228, 13, 'あきる野市', 'あきるのし', '35.72888889', '139.2941667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13229, 13, '西東京市', 'にしとうきょうし', '35.72583333', '139.5386111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13303, 13, '瑞穂町', 'みずほまち', '35.77194444', '139.3538889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13305, 13, '日の出町', 'ひのでまち', '35.74222222', '139.2575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13307, 13, '檜原村', 'ひのはらむら', '35.72694444', '139.1488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13308, 13, '奥多摩町', 'おくたままち', '35.80972222', '139.0963889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13361, 13, '大島町', 'おおしままち', '34.75', '139.3558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13362, 13, '利島村', 'としまむら', '34.52944444', '139.2822222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13363, 13, '新島村', 'にいじまむら', '34.37694444', '139.2572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13364, 13, '神津島村', 'こうづしまむら', '34.20555556', '139.1347222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13381, 13, '三宅村', 'みやけむら', '34.07583333', '139.4797222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13382, 13, '御蔵島村', 'みくらじまむら', '33.89722222', '139.5958333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13401, 13, '八丈町', 'はちじょうまち', '33.10944444', '139.7908333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13402, 13, '青ヶ島村', 'あおがしまむら', '32.46694444', '139.7633333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(13421, 13, '小笠原村', 'おがさわらむら', '27.09444444', '142.1919444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14100, 14, '横浜市', 'よこはまし', '35.44416667', '139.6380556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14101, 14, '横浜市 鶴見区', 'よこはまし つるみく', '35.50833333', '139.6825');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14102, 14, '横浜市 神奈川区', 'よこはまし かながわく', '35.47694444', '139.6294444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14103, 14, '横浜市 西区', 'よこはまし にしく', '35.45361111', '139.6169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14104, 14, '横浜市 中区', 'よこはまし なかく', '35.44472222', '139.6422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14105, 14, '横浜市 南区', 'よこはまし みなみく', '35.43138889', '139.6088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14106, 14, '横浜市 保土ケ谷区', 'よこはまし ほどがやく', '35.46', '139.5961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14107, 14, '横浜市 磯子区', 'よこはまし いそごく', '35.40222222', '139.6188889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14108, 14, '横浜市 金沢区', 'よこはまし かなざわく', '35.3375', '139.6244444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14109, 14, '横浜市 港北区', 'よこはまし こうほくく', '35.51888889', '139.6330556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14110, 14, '横浜市 戸塚区', 'よこはまし とつかく', '35.39638889', '139.5325');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14111, 14, '横浜市 港南区', 'よこはまし こうなんく', '35.40055556', '139.5913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14112, 14, '横浜市 旭区', 'よこはまし あさひく', '35.47472222', '139.5447222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14113, 14, '横浜市 緑区', 'よこはまし みどりく', '35.5125', '139.5380556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14114, 14, '横浜市 瀬谷区', 'よこはまし せやく', '35.46638889', '139.4991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14115, 14, '横浜市 栄区', 'よこはまし さかえく', '35.36444444', '139.5541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14116, 14, '横浜市 泉区', 'よこはまし いずみく', '35.41777778', '139.4886111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14117, 14, '横浜市 青葉区', 'よこはまし あおばく', '35.55277778', '139.5372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14118, 14, '横浜市 都筑区', 'よこはまし つづきく', '35.54472222', '139.5705556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14130, 14, '川崎市', 'かわさきし', '35.53083333', '139.7030556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14131, 14, '川崎市 川崎区', 'かわさきし かわさきく', '35.52972222', '139.7038889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14132, 14, '川崎市 幸区', 'かわさきし さいわいく', '35.54444444', '139.6875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14133, 14, '川崎市 中原区', 'かわさきし なかはらく', '35.57611111', '139.6558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14134, 14, '川崎市 高津区', 'かわさきし たかつく', '35.59944444', '139.6080556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14135, 14, '川崎市 多摩区', 'かわさきし たまく', '35.61972222', '139.5619444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14136, 14, '川崎市 宮前区', 'かわさきし みやまえく', '35.58916667', '139.5786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14137, 14, '川崎市 麻生区', 'かわさきし あさおく', '35.60388889', '139.5058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14150, 14, '相模原市', 'さがみはらし', '35.57138889', '139.3733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14151, 14, '相模原市 緑区', 'さがみはらし みどりく', '35.59611111', '139.345');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14152, 14, '相模原市 中央区', 'さがみはらし ちゅうおうく', '35.57138889', '139.3733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14153, 14, '相模原市 南区', 'さがみはらし みなみく', '35.53027778', '139.4302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14201, 14, '横須賀市', 'よこすかし', '35.28138889', '139.6722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14203, 14, '平塚市', 'ひらつかし', '35.33555556', '139.3497222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14204, 14, '鎌倉市', 'かまくらし', '35.31916667', '139.5469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14205, 14, '藤沢市', 'ふじさわし', '35.33916667', '139.4913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14206, 14, '小田原市', 'おだわらし', '35.26472222', '139.1522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14207, 14, '茅ヶ崎市', 'ちがさきし', '35.33388889', '139.4047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14208, 14, '逗子市', 'ずしし', '35.29555556', '139.5802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14210, 14, '三浦市', 'みうらし', '35.14416667', '139.6205556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14211, 14, '秦野市', 'はだのし', '35.37472222', '139.2202778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14212, 14, '厚木市', 'あつぎし', '35.44305556', '139.3625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14213, 14, '大和市', 'やまとし', '35.4875', '139.4580556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14214, 14, '伊勢原市', 'いせはらし', '35.40277778', '139.315');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14215, 14, '海老名市', 'えびなし', '35.44638889', '139.3908333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14216, 14, '座間市', 'ざまし', '35.48861111', '139.4075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14217, 14, '南足柄市', 'みなみあしがらし', '35.32055556', '139.1');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14218, 14, '綾瀬市', 'あやせし', '35.43722222', '139.4269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14301, 14, '葉山町', 'はやままち', '35.27194444', '139.5863889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14321, 14, '寒川町', 'さむかわまち', '35.37305556', '139.3841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14341, 14, '大磯町', 'おおいそまち', '35.30694444', '139.3113889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14342, 14, '二宮町', 'にのみやまち', '35.29944444', '139.2552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14361, 14, '中井町', 'なかいまち', '35.33083333', '139.2188889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14362, 14, '大井町', 'おおいまち', '35.32666667', '139.1563889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14363, 14, '松田町', 'まつだまち', '35.34833333', '139.1394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14364, 14, '山北町', 'やまきたまち', '35.36055556', '139.0838889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14366, 14, '開成町', 'かいせいまち', '35.33638889', '139.1233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14382, 14, '箱根町', 'はこねまち', '35.2325', '139.1069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14383, 14, '真鶴町', 'まなづるまち', '35.15833333', '139.1372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14384, 14, '湯河原町', 'ゆがわらまち', '35.14777778', '139.1083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14401, 14, '愛川町', 'あいかわまち', '35.52888889', '139.3216667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(14402, 14, '清川村', 'きよかわむら', '35.48222222', '139.2763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15100, 15, '新潟市', 'にいがたし', '37.91611111', '139.0363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15101, 15, '新潟市 北区', 'にいがたし きたく', '37.91638889', '139.2186111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15102, 15, '新潟市 東区', 'にいがたし ひがしく', '37.92477958', '139.0925915');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15103, 15, '新潟市 中央区', 'にいがたし ちゅうおうく', '37.91611111', '139.0363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15104, 15, '新潟市 江南区', 'にいがたし こうなんく', '37.86777778', '139.0941667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15105, 15, '新潟市 秋葉区', 'にいがたし あきはく', '37.78861111', '139.1144444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15106, 15, '新潟市 南区', 'にいがたし みなみく', '37.76583333', '139.0191667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15107, 15, '新潟市 西区', 'にいがたし にしく', '37.87388889', '138.9716667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15108, 15, '新潟市 西蒲区', 'にいがたし にしかんく', '37.76055556', '138.8891667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15202, 15, '長岡市', 'ながおかし', '37.43638889', '138.8388889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15204, 15, '三条市', 'さんじょうし', '37.63638889', '138.9616667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15205, 15, '柏崎市', 'かしわざきし', '37.37194444', '138.5588889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15206, 15, '新発田市', 'しばたし', '37.95083333', '139.3277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15208, 15, '小千谷市', 'おぢやし', '37.31444444', '138.795');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15209, 15, '加茂市', 'かもし', '37.66638889', '139.0402778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15210, 15, '十日町市', 'とおかまちし', '37.1275', '138.7555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15211, 15, '見附市', 'みつけし', '37.53138889', '138.9127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15212, 15, '村上市', 'むらかみし', '38.22416667', '139.48');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15213, 15, '燕市', 'つばめし', '37.68611111', '138.88');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15216, 15, '糸魚川市', 'いといがわし', '37.03888889', '137.8627778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15217, 15, '妙高市', 'みょうこうし', '37.02526874', '138.2533423');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15218, 15, '五泉市', 'ごせんし', '37.74472222', '139.1825');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15222, 15, '上越市', 'じょうえつし', '37.14805556', '138.2361111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15223, 15, '阿賀野市', 'あがのし', '37.83444444', '139.2258333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15224, 15, '佐渡市', 'さどし', '38.01805556', '138.3683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15225, 15, '魚沼市', 'うおぬまし', '37.23027778', '138.9616667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15226, 15, '南魚沼市', 'みなみうおぬまし', '37.06555556', '138.8761111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15227, 15, '胎内市', 'たいないし', '38.05972222', '139.4102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15307, 15, '聖籠町', 'せいろうまち', '37.97444444', '139.2744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15342, 15, '弥彦村', 'やひこむら', '37.69111111', '138.8552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15361, 15, '田上町', 'たがみまち', '37.69888889', '139.0580556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15385, 15, '阿賀町', 'あがまち', '37.67555556', '139.4586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15405, 15, '出雲崎町', 'いずもざきまち', '37.53083333', '138.7094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15461, 15, '湯沢町', 'ゆざわまち', '36.93388889', '138.8175');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15482, 15, '津南町', 'つなんまち', '37.01416667', '138.6525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15504, 15, '刈羽村', 'かりわむら', '37.42222222', '138.6225');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15581, 15, '関川村', 'せきかわむら', '38.08944444', '139.565');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(15586, 15, '粟島浦村', 'あわしまうらむら', '38.46833333', '139.2547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16201, 16, '富山市', 'とやまし', '36.69583333', '137.2136111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16202, 16, '高岡市', 'たかおかし', '36.75416667', '137.0261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16204, 16, '魚津市', 'うおづし', '36.8275', '137.4091667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16205, 16, '氷見市', 'ひみし', '36.85722222', '136.9863889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16206, 16, '滑川市', 'なめりかわし', '36.76444444', '137.3411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16207, 16, '黒部市', 'くろべし', '36.87361111', '137.4491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16208, 16, '砺波市', 'となみし', '36.6475', '136.9622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16209, 16, '小矢部市', 'おやべし', '36.67555556', '136.8686111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16210, 16, '南砺市', 'なんとし', '36.58777778', '136.9194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16211, 16, '射水市', 'いみずし', '36.71222222', '137.0997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16321, 16, '舟橋村', 'ふなはしむら', '36.70361111', '137.3075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16322, 16, '上市町', 'かみいちまち', '36.69833333', '137.3625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16323, 16, '立山町', 'たてやままち', '36.66333333', '137.3136111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16342, 16, '入善町', 'にゅうぜんまち', '36.93361111', '137.5022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(16343, 16, '朝日町', 'あさひまち', '36.94638889', '137.56');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17201, 17, '金沢市', 'かなざわし', '36.56083333', '136.6566667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17202, 17, '七尾市', 'ななおし', '37.04305556', '136.9672222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17203, 17, '小松市', 'こまつし', '36.40861111', '136.4455556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17204, 17, '輪島市', 'わじまし', '37.39055556', '136.8991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17205, 17, '珠洲市', 'すずし', '37.43638889', '137.2602778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17206, 17, '加賀市', 'かがし', '36.30277778', '136.315');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17207, 17, '羽咋市', 'はくいし', '36.89361111', '136.7788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17209, 17, 'かほく市', 'かほくし', '36.72', '136.7066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17210, 17, '白山市', 'はくさんし', '36.51444444', '136.5655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17211, 17, '能美市', 'のみし', '36.4375', '136.4961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17212, 17, '野々市市', 'ののいちし', '36.51944444', '136.6097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17324, 17, '川北町', 'かわきたまち', '36.46861111', '136.5422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17361, 17, '津幡町', 'つばたまち', '36.66861111', '136.7283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17365, 17, '内灘町', 'うちなだまち', '36.65361111', '136.645');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17384, 17, '志賀町', 'しかまち', '37.00638889', '136.7780556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17386, 17, '宝達志水町', 'ほうだつしみずちょう', '36.86277778', '136.7977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17407, 17, '中能登町', 'なかのとまち', '36.98888889', '136.9016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17461, 17, '穴水町', 'あなみずまち', '37.23111111', '136.9125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(17463, 17, '能登町', 'のとちょう', '37.30666667', '137.15');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18201, 18, '福井市', 'ふくいし', '36.06416667', '136.2194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18202, 18, '敦賀市', 'つるがし', '35.64527778', '136.0555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18204, 18, '小浜市', 'おばまし', '35.49555556', '135.7466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18205, 18, '大野市', 'おおのし', '35.98055556', '136.4875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18206, 18, '勝山市', 'かつやまし', '36.06083333', '136.5005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18207, 18, '鯖江市', 'さばえし', '35.95666667', '136.1844444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18208, 18, 'あわら市', 'あわらし', '36.21138889', '136.2288889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18209, 18, '越前市', 'えちぜんし', '35.90333333', '136.1691667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18210, 18, '坂井市', 'さかいし', '36.16694444', '136.2316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18322, 18, '永平寺町', 'えいへいじちょう', '36.09222222', '136.2986111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18382, 18, '池田町', 'いけだちょう', '35.89027778', '136.3441667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18404, 18, '南越前町', 'みなみえちぜんちょう', '35.835', '136.1944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18423, 18, '越前町', 'えちぜんちょう', '35.97416667', '136.1297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18442, 18, '美浜町', 'みはまちょう', '35.60055556', '135.9405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18481, 18, '高浜町', 'たかはまちょう', '35.49027778', '135.5511111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18483, 18, 'おおい町', 'おおいちょう', '35.48111111', '135.6177778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(18501, 18, '若狭町', 'わかさちょう', '35.54888889', '135.9083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19201, 19, '甲府市', 'こうふし', '35.66222222', '138.5683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19202, 19, '富士吉田市', 'ふじよしだし', '35.4875', '138.8080556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19204, 19, '都留市', 'つるし', '35.55138889', '138.9055556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19205, 19, '山梨市', 'やまなしし', '35.69333333', '138.6872222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19206, 19, '大月市', 'おおつきし', '35.61055556', '138.94');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19207, 19, '韮崎市', 'にらさきし', '35.70888889', '138.4463889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19208, 19, '南アルプス市', 'みなみあるぷすし', '35.60833333', '138.465');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19209, 19, '北杜市', 'ほくとし', '35.77666667', '138.4236111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19210, 19, '甲斐市', 'かいし', '35.66083333', '138.5158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19211, 19, '笛吹市', 'ふえふきし', '35.64722222', '138.64');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19212, 19, '上野原市', 'うえのはらし', '35.63027778', '139.1086111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19213, 19, '甲州市', 'こうしゅうし', '35.70416666', '138.7294444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19214, 19, '中央市', 'ちゅうおうし', '35.59972222', '138.5172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19346, 19, '市川三郷町', 'いちかわみさとちょう', '35.56527778', '138.5022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19364, 19, '早川町', 'はやかわちょう', '35.41277778', '138.3630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19365, 19, '身延町', 'みのぶちょう', '35.4675', '138.4425');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19366, 19, '南部町', 'なんぶちょう', '35.2425', '138.4861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19368, 19, '富士川町', 'ふじかわちょう', '35.56111111', '138.4613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19384, 19, '昭和町', 'しょうわちょう', '35.62805556', '138.535');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19422, 19, '道志村', 'どうしむら', '35.52805556', '139.0336111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19423, 19, '西桂町', 'にしかつらちょう', '35.52416667', '138.8469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19424, 19, '忍野村', 'おしのむら', '35.46', '138.8477778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19425, 19, '山中湖村', 'やまなかこむら', '35.41055556', '138.8608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19429, 19, '鳴沢村', 'なるさわむら', '35.48138889', '138.7066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19430, 19, '富士河口湖町', 'ふじかわぐちこまち', '35.49722222', '138.755');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19442, 19, '小菅村', 'こすげむら', '35.76027778', '138.9402778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(19443, 19, '丹波山村', 'たばやまむら', '35.78972222', '138.9222222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20201, 20, '長野市', 'ながのし', '36.64861111', '138.1944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20202, 20, '松本市', 'まつもとし', '36.23805556', '137.9719444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20203, 20, '上田市', 'うえだし', '36.40194444', '138.2491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20204, 20, '岡谷市', 'おかやし', '36.06694444', '138.0494444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20205, 20, '飯田市', 'いいだし', '35.51472222', '137.8219444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20206, 20, '諏訪市', 'すわし', '36.03916667', '138.1141667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20207, 20, '須坂市', 'すざかし', '36.65111111', '138.3069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20208, 20, '小諸市', 'こもろし', '36.32694444', '138.4261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20209, 20, '伊那市', 'いなし', '35.8275', '137.9538889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20210, 20, '駒ヶ根市', 'こまがねし', '35.72888889', '137.9338889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20211, 20, '中野市', 'なかのし', '36.74194444', '138.3694444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20212, 20, '大町市', 'おおまちし', '36.50305556', '137.8508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20213, 20, '飯山市', 'いいやまし', '36.85166667', '138.3655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20214, 20, '茅野市', 'ちのし', '35.99555556', '138.1588889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20215, 20, '塩尻市', 'しおじりし', '36.115', '137.9536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20217, 20, '佐久市', 'さくし', '36.24888889', '138.4769444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20218, 20, '千曲市', 'ちくまし', '36.53388889', '138.12');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20219, 20, '東御市', 'とうみし', '36.35944444', '138.3305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20220, 20, '安曇野市', 'あづみのし', '36.30277778', '137.8997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20303, 20, '小海町', 'こうみまち', '36.095', '138.4836111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20304, 20, '川上村', 'かわかみむら', '35.97555556', '138.5783333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20305, 20, '南牧村', 'みなみまきむら', '36.02083333', '138.4922222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20306, 20, '南相木村', 'みなみあいきむら', '36.03611111', '138.5469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20307, 20, '北相木村', 'きたあいきむら', '36.05916667', '138.5511111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20309, 20, '佐久穂町', 'さくほまち', '36.16111111', '138.4833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20321, 20, '軽井沢町', 'かるいざわまち', '36.34833333', '138.5969444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20323, 20, '御代田町', 'みよたまち', '36.32138889', '138.5088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20324, 20, '立科町', 'たてしなまち', '36.27194444', '138.3161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20349, 20, '青木村', 'あおきむら', '36.37', '138.1286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20350, 20, '長和町', 'ながわまち', '36.25611111', '138.2677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20361, 20, '下諏訪町', 'しもすわまち', '36.06972222', '138.0802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20362, 20, '富士見町', 'ふじみまち', '35.91472222', '138.2408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20363, 20, '原村', 'はらむら', '35.96444444', '138.2175');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20382, 20, '辰野町', 'たつのまち', '35.9825', '137.9875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20383, 20, '箕輪町', 'みのわまち', '35.915', '137.9819444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20384, 20, '飯島町', 'いいじままち', '35.67638889', '137.9194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20385, 20, '南箕輪村', 'みなみみのわむら', '35.87277778', '137.9752778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20386, 20, '中川村', 'なかがわむら', '35.63444444', '137.9461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20388, 20, '宮田村', 'みやだむら', '35.76888889', '137.9444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20402, 20, '松川町', 'まつかわまち', '35.59722222', '137.9097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20403, 20, '高森町', 'たかもりまち', '35.55138889', '137.8786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20404, 20, '阿南町', 'あなんちょう', '35.32361111', '137.8161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20407, 20, '阿智村', 'あちむら', '35.44388889', '137.7475');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20409, 20, '平谷村', 'ひらやむら', '35.32333333', '137.6302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20410, 20, '根羽村', 'ねばむら', '35.25305556', '137.5811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20411, 20, '下條村', 'しもじょうむら', '35.3975', '137.7861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20412, 20, '売木村', 'うるぎむら', '35.27111111', '137.7111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20413, 20, '天龍村', 'てんりゅうむら', '35.27638889', '137.8544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20414, 20, '泰阜村', 'やすおかむら', '35.37722222', '137.8458333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20415, 20, '喬木村', 'たかぎむら', '35.51388889', '137.8738889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20416, 20, '豊丘村', 'とよおかむら', '35.55138889', '137.8958333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20417, 20, '大鹿村', 'おおしかむら', '35.57833333', '138.0341667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20422, 20, '上松町', 'あげまつまち', '35.78388889', '137.6941667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20423, 20, '南木曽町', 'なぎそまち', '35.60361111', '137.6088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20425, 20, '木祖村', 'きそむら', '35.93638889', '137.7830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20429, 20, '王滝村', 'おうたきむら', '35.80944444', '137.5511111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20430, 20, '大桑村', 'おおくわむら', '35.68277778', '137.665');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20432, 20, '木曽町', 'きそまち', '35.8425', '137.6916667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20446, 20, '麻績村', 'おみむら', '36.45611111', '138.0452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20448, 20, '生坂村', 'いくさかむら', '36.42527778', '137.9275');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20450, 20, '山形村', 'やまがたむら', '36.16805556', '137.8788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20451, 20, '朝日村', 'あさひむら', '36.12361111', '137.8663889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20452, 20, '筑北村', 'ちくほくむら', '36.42638889', '138.0152778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20481, 20, '池田町', 'いけだまち', '36.42138889', '137.8747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20482, 20, '松川村', 'まつかわむら', '36.42416667', '137.8544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20485, 20, '白馬村', 'はくばむら', '36.69833333', '137.8622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20486, 20, '小谷村', 'おたりむら', '36.77916667', '137.9083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20521, 20, '坂城町', 'さかきまち', '36.46194444', '138.1802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20541, 20, '小布施町', 'おぶせまち', '36.69777778', '138.3122222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20543, 20, '高山村', 'たかやまむら', '36.67972222', '138.3630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20561, 20, '山ノ内町', 'やまのうちまち', '36.74472222', '138.4125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20562, 20, '木島平村', 'きじまだいらむら', '36.85861111', '138.4066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20563, 20, '野沢温泉村', 'のざわおんせんむら', '36.92277778', '138.4405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20583, 20, '信濃町', 'しなのまち', '36.80638889', '138.2069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20588, 20, '小川村', 'おがわむら', '36.61694444', '137.9744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20590, 20, '飯綱町', 'いいづなまち', '36.755', '138.2355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(20602, 20, '栄村', 'さかえむら', '36.9875', '138.5775');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21201, 21, '岐阜市', 'ぎふし', '35.42333333', '136.7608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21202, 21, '大垣市', 'おおがきし', '35.35944444', '136.6127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21203, 21, '高山市', 'たかやまし', '36.14583333', '137.2522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21204, 21, '多治見市', 'たじみし', '35.33277778', '137.1322222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21205, 21, '関市', 'せきし', '35.49583333', '136.9177778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21206, 21, '中津川市', 'なかつがわし', '35.4875', '137.5005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21207, 21, '美濃市', 'みのし', '35.54472222', '136.9075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21208, 21, '瑞浪市', 'みずなみし', '35.36194444', '137.2544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21209, 21, '羽島市', 'はしまし', '35.32', '136.7033333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21210, 21, '恵那市', 'えなし', '35.44944444', '137.4127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21211, 21, '美濃加茂市', 'みのかもし', '35.44027778', '137.0155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21212, 21, '土岐市', 'ときし', '35.3525', '137.1833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21213, 21, '各務原市', 'かかみがはらし', '35.39888889', '136.8486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21214, 21, '可児市', 'かにし', '35.42583333', '137.0611111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21215, 21, '山県市', 'やまがたし', '35.50611111', '136.7813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21216, 21, '瑞穂市', 'みずほし', '35.39194444', '136.6908333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21217, 21, '飛騨市', 'ひだし', '36.23833333', '137.1861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21218, 21, '本巣市', 'もとすし', '35.48305556', '136.6786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21219, 21, '郡上市', 'ぐじょうし', '35.74861111', '136.9644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21220, 21, '下呂市', 'げろし', '35.80583333', '137.2441667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21221, 21, '海津市', 'かいづし', '35.22055556', '136.6366667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21302, 21, '岐南町', 'ぎなんちょう', '35.38972222', '136.7827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21303, 21, '笠松町', 'かさまつちょう', '35.36722222', '136.7633333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21341, 21, '養老町', 'ようろうちょう', '35.30833333', '136.5613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21361, 21, '垂井町', 'たるいちょう', '35.37027778', '136.5269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21362, 21, '関ケ原町', 'せきがはらちょう', '35.36527778', '136.4672222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21381, 21, '神戸町', 'ごうどちょう', '35.4175', '136.6086111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21382, 21, '輪之内町', 'わのうちちょう', '35.285', '136.6375');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21383, 21, '安八町', 'あんぱちちょう', '35.33555556', '136.6655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21401, 21, '揖斐川町', 'いびがわちょう', '35.48694444', '136.5680556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21403, 21, '大野町', 'おおのちょう', '35.47055556', '136.6275');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21404, 21, '池田町', 'いけだちょう', '35.44222222', '136.5730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21421, 21, '北方町', 'きたがたちょう', '35.43694444', '136.6861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21501, 21, '坂祝町', 'さかほぎちょう', '35.42666667', '136.9852778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21502, 21, '富加町', 'とみかちょう', '35.48472222', '136.9797222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21503, 21, '川辺町', 'かわべちょう', '35.48666667', '137.0705556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21504, 21, '七宗町', 'ひちそうちょう', '35.54388889', '137.12');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21505, 21, '八百津町', 'やおつちょう', '35.47611111', '137.1416667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21506, 21, '白川町', 'しらかわちょう', '35.58222222', '137.1883333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21507, 21, '東白川村', 'ひがししらかわむら', '35.6425', '137.3238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21521, 21, '御嵩町', 'みたけちょう', '35.43444444', '137.1308333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(21604, 21, '白川村', 'しらかわむら', '36.27083333', '136.8986111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22100, 22, '静岡市', 'しずおかし', '34.97555556', '138.3827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22101, 22, '静岡市 葵区', 'しずおかし あおいく', '34.97527778', '138.3830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22102, 22, '静岡市 駿河区', 'しずおかし するがく', '34.96055556', '138.4041667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22103, 22, '静岡市 清水区', 'しずおかし しみずく', '35.01583333', '138.4897222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22130, 22, '浜松市', 'はままつし', '34.71083333', '137.7266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22131, 22, '浜松市 中区', 'はままつし なかく', '34.71111111', '137.7266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22132, 22, '浜松市 東区', 'はままつし ひがしく', '34.74138889', '137.7916667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22133, 22, '浜松市 西区', 'はままつし にしく', '34.69277778', '137.6452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22134, 22, '浜松市 南区', 'はままつし みなみく', '34.66722222', '137.7522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22135, 22, '浜松市 北区', 'はままつし きたく', '34.80611111', '137.6511111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22136, 22, '浜松市 浜北区', 'はままつし はまきたく', '34.79305556', '137.79');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22137, 22, '浜松市 天竜区', 'はままつし てんりゅうく', '34.87277778', '137.8161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22203, 22, '沼津市', 'ぬまづし', '35.09555556', '138.8636111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22205, 22, '熱海市', 'あたみし', '35.09611111', '139.0716667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22206, 22, '三島市', 'みしまし', '35.11861111', '138.9186111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22207, 22, '富士宮市', 'ふじのみやし', '35.22222222', '138.6213889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22208, 22, '伊東市', 'いとうし', '34.96583333', '139.1019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22209, 22, '島田市', 'しまだし', '34.83638889', '138.1761111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22210, 22, '富士市', 'ふじし', '35.16138889', '138.6763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22211, 22, '磐田市', 'いわたし', '34.71777778', '137.8513889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22212, 22, '焼津市', 'やいづし', '34.86694444', '138.3230556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22213, 22, '掛川市', 'かけがわし', '34.76861111', '137.9983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22214, 22, '藤枝市', 'ふじえだし', '34.8675', '138.2577778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22215, 22, '御殿場市', 'ごてんばし', '35.30861111', '138.935');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22216, 22, '袋井市', 'ふくろいし', '34.75027778', '137.925');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22219, 22, '下田市', 'しもだし', '34.67944444', '138.9452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22220, 22, '裾野市', 'すそのし', '35.17388889', '138.9066667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22221, 22, '湖西市', 'こさいし', '34.71861111', '137.5316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22222, 22, '伊豆市', 'いずし', '34.97666667', '138.9469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22223, 22, '御前崎市', 'おまえざきし', '34.63805556', '138.1280556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22224, 22, '菊川市', 'きくがわし', '34.75777778', '138.0841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22225, 22, '伊豆の国市', 'いずのくにし', '35.02777778', '138.9288889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22226, 22, '牧之原市', 'まきのはらし', '34.74', '138.2247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22301, 22, '東伊豆町', 'ひがしいずちょう', '34.77277778', '139.0413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22302, 22, '河津町', 'かわづちょう', '34.75722222', '138.9875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22304, 22, '南伊豆町', 'みなみいずちょう', '34.65055556', '138.8591667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22305, 22, '松崎町', 'まつざきちょう', '34.75305556', '138.7788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22306, 22, '西伊豆町', 'にしいずちょう', '34.77166667', '138.7752778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22325, 22, '函南町', 'かんなみちょう', '35.08888888', '138.9533333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22341, 22, '清水町', 'しみずちょう', '35.09916667', '138.9027778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22342, 22, '長泉町', 'ながいずみちょう', '35.13777778', '138.8972222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22344, 22, '小山町', 'おやまちょう', '35.36', '138.9875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22424, 22, '吉田町', 'よしだちょう', '34.77083333', '138.2519444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22429, 22, '川根本町', 'かわねほんちょう', '35.04694444', '138.0816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(22461, 22, '森町', 'もりまち', '34.83555556', '137.9272222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23100, 23, '名古屋市', 'なごやし', '35.18166667', '136.9063889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23101, 23, '名古屋市 千種区', 'なごやし ちくさく', '35.16638889', '136.9463889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23102, 23, '名古屋市 東区', 'なごやし ひがしく', '35.17944444', '136.9261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23103, 23, '名古屋市 北区', 'なごやし きたく', '35.19416667', '136.9116667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23104, 23, '名古屋市 西区', 'なごやし にしく', '35.18916666', '136.89');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23105, 23, '名古屋市 中村区', 'なごやし なかむらく', '35.16861111', '136.8730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23106, 23, '名古屋市 中区', 'なごやし なかく', '35.16861111', '136.9102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23107, 23, '名古屋市 昭和区', 'なごやし しょうわく', '35.15027778', '136.9341667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23108, 23, '名古屋市 瑞穂区', 'なごやし みずほく', '35.13166667', '136.935');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23109, 23, '名古屋市 熱田区', 'なごやし あつたく', '35.12833333', '136.9105556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23110, 23, '名古屋市 中川区', 'なごやし なかがわく', '35.14166667', '136.855');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23111, 23, '名古屋市 港区', 'なごやし みなとく', '35.10777778', '136.8855556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23112, 23, '名古屋市 南区', 'なごやし みなみく', '35.095', '136.9311111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23113, 23, '名古屋市 守山区', 'なごやし もりやまく', '35.20333333', '136.9766667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23114, 23, '名古屋市 緑区', 'なごやし みどりく', '35.07083333', '136.9522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23115, 23, '名古屋市 名東区', 'なごやし めいとうく', '35.17583333', '137.0102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23116, 23, '名古屋市 天白区', 'なごやし てんぱくく', '35.12277778', '136.975');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23201, 23, '豊橋市', 'とよはしし', '34.76916667', '137.3913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23202, 23, '岡崎市', 'おかざきし', '34.95472222', '137.1730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23203, 23, '一宮市', 'いちのみやし', '35.30416667', '136.8025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23204, 23, '瀬戸市', 'せとし', '35.22333333', '137.0841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23205, 23, '半田市', 'はんだし', '34.8925', '136.9377778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23206, 23, '春日井市', 'かすがいし', '35.2475', '136.9722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23207, 23, '豊川市', 'とよかわし', '34.82694444', '137.3758333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23208, 23, '津島市', 'つしまし', '35.17722222', '136.7413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23209, 23, '碧南市', 'へきなんし', '34.88472222', '136.9936111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23210, 23, '刈谷市', 'かりやし', '34.98916667', '137.0025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23211, 23, '豊田市', 'とよたし', '35.08333333', '137.1563889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23212, 23, '安城市', 'あんじょうし', '34.95861426', '137.0802809');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23213, 23, '西尾市', 'にしおし', '34.86194444', '137.0619444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23214, 23, '蒲郡市', 'がまごおりし', '34.82638889', '137.2197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23215, 23, '犬山市', 'いぬやまし', '35.37861111', '136.9441667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23216, 23, '常滑市', 'とこなめし', '34.88666667', '136.8325');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23217, 23, '江南市', 'こうなんし', '35.33222222', '136.8708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23219, 23, '小牧市', 'こまきし', '35.29111111', '136.9122222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23220, 23, '稲沢市', 'いなざわし', '35.24805556', '136.7802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23221, 23, '新城市', 'しんしろし', '34.89916667', '137.4986111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23222, 23, '東海市', 'とうかいし', '35.02305556', '136.9025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23223, 23, '大府市', 'おおぶし', '35.01222222', '136.9633333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23224, 23, '知多市', 'ちたし', '34.99666667', '136.8647222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23225, 23, '知立市', 'ちりゅうし', '35.00138889', '137.0505556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23226, 23, '尾張旭市', 'おわりあさひし', '35.21638889', '137.0352778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23227, 23, '高浜市', 'たかはまし', '34.9275', '136.9877778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23228, 23, '岩倉市', 'いわくらし', '35.28', '136.8713889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23229, 23, '豊明市', 'とよあけし', '35.05388889', '137.0127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23230, 23, '日進市', 'にっしんし', '35.13194444', '137.0394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23231, 23, '田原市', 'たはらし', '34.66916667', '137.2636111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23232, 23, '愛西市', 'あいさいし', '35.15277778', '136.7283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23233, 23, '清須市', 'きよすし', '35.19972222', '136.8527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23234, 23, '北名古屋市', 'きたなごやし', '35.24555556', '136.8661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23235, 23, '弥富市', 'やとみし', '35.11', '136.7247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23236, 23, 'みよし市', 'みよしし', '35.08972222', '137.0744444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23237, 23, 'あま市', 'あまし', '35.20055556', '136.7836111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23238, 23, '長久手市', 'ながくてし', '35.18416667', '137.0486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23302, 23, '東郷町', 'とうごうちょう', '35.09694444', '137.0525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23342, 23, '豊山町', 'とよやまちょう', '35.25083333', '136.9122222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23361, 23, '大口町', 'おおぐちちょう', '35.3325', '136.9077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23362, 23, '扶桑町', 'ふそうちょう', '35.35916667', '136.9130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23424, 23, '大治町', 'おおはるちょう', '35.175', '136.82');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23425, 23, '蟹江町', 'かにえちょう', '35.13222222', '136.7869444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23427, 23, '飛島村', 'とびしまむら', '35.07888889', '136.7913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23441, 23, '阿久比町', 'あぐいちょう', '34.9325', '136.9155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23442, 23, '東浦町', 'ひがしうらちょう', '34.97722222', '136.9655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23445, 23, '南知多町', 'みなみちたちょう', '34.71527778', '136.9297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23446, 23, '美浜町', 'みはまちょう', '34.77888889', '136.9083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23447, 23, '武豊町', 'たけとよちょう', '34.85138889', '136.915');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23501, 23, '幸田町', 'こうたちょう', '34.86472222', '137.1655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23561, 23, '設楽町', 'したらちょう', '35.0975', '137.57');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23562, 23, '東栄町', 'とうえいちょう', '35.07694444', '137.6977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(23563, 23, '豊根村', 'とよねむら', '35.14638889', '137.7197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24201, 24, '津市', 'つし', '34.71861111', '136.5055556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24202, 24, '四日市市', 'よっかいちし', '34.965', '136.6244444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24203, 24, '伊勢市', 'いせし', '34.4875', '136.7094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24204, 24, '松阪市', 'まつさかし', '34.57805556', '136.5275');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24205, 24, '桑名市', 'くわなし', '35.06222222', '136.6838889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24207, 24, '鈴鹿市', 'すずかし', '34.88222222', '136.5841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24208, 24, '名張市', 'なばりし', '34.6275', '136.1083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24209, 24, '尾鷲市', 'おわせし', '34.07083333', '136.1911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24210, 24, '亀山市', 'かめやまし', '34.85583333', '136.4516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24211, 24, '鳥羽市', 'とばし', '34.48138889', '136.8436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24212, 24, '熊野市', 'くまのし', '33.88861111', '136.1002778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24214, 24, 'いなべ市', 'いなべし', '35.11583333', '136.5613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24215, 24, '志摩市', 'しまし', '34.32833333', '136.8297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24216, 24, '伊賀市', 'いがし', '34.76861111', '136.13');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24303, 24, '木曽岬町', 'きそさきちょう', '35.07583333', '136.7311111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24324, 24, '東員町', 'とういんちょう', '35.07416667', '136.5836111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24341, 24, '菰野町', 'こものちょう', '35.02', '136.5075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24343, 24, '朝日町', 'あさひちょう', '35.03416667', '136.6644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24344, 24, '川越町', 'かわごえちょう', '35.02305556', '136.6738889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24441, 24, '多気町', 'たきちょう', '34.49611111', '136.5461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24442, 24, '明和町', 'めいわちょう', '34.54777778', '136.6236111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24443, 24, '大台町', 'おおだいちょう', '34.39333333', '136.4080556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24461, 24, '玉城町', 'たまきちょう', '34.49027778', '136.6308333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24470, 24, '度会町', 'わたらいちょう', '34.43888889', '136.6225');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24471, 24, '大紀町', 'たいきちょう', '34.35805556', '136.4158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24472, 24, '南伊勢町', 'みなみいせちょう', '34.35194444', '136.7038889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24543, 24, '紀北町', 'きほくちょう', '34.211458', '136.337337');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24561, 24, '御浜町', 'みはまちょう', '33.81444444', '136.0488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(24562, 24, '紀宝町', 'きほうちょう', '33.73388889', '136.0097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25201, 25, '大津市', 'おおつし', '35.01777778', '135.8547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25202, 25, '彦根市', 'ひこねし', '35.27444444', '136.2597222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25203, 25, '長浜市', 'ながはまし', '35.38138889', '136.2755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25204, 25, '近江八幡市', 'おうみはちまんし', '35.12833333', '136.0980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25206, 25, '草津市', 'くさつし', '35.01305556', '135.96');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25207, 25, '守山市', 'もりやまし', '35.05888889', '135.9944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25208, 25, '栗東市', 'りっとうし', '35.02166667', '135.9980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25209, 25, '甲賀市', 'こうかし', '34.96611111', '136.1672222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25210, 25, '野洲市', 'やすし', '35.0675', '136.0258333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25211, 25, '湖南市', 'こなんし', '35.00416667', '136.085');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25212, 25, '高島市', 'たかしまし', '35.35277778', '136.0355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25213, 25, '東近江市', 'ひがしおうみし', '35.11277778', '136.2077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25214, 25, '米原市', 'まいばらし', '35.31527778', '136.2838889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25383, 25, '日野町', 'ひのちょう', '35.01805556', '136.2461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25384, 25, '竜王町', 'りゅうおうちょう', '35.06083333', '136.1244444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25425, 25, '愛荘町', 'あいしょうちょう', '35.16888889', '136.2125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25441, 25, '豊郷町', 'とよさとちょう', '35.20055556', '136.23');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25442, 25, '甲良町', 'こうらちょう', '35.20416667', '136.2613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(25443, 25, '多賀町', 'たがちょう', '35.22194444', '136.2922222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26100, 26, '京都市', 'きょうとし', '35.01166667', '135.7683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26101, 26, '京都市 北区', 'きょうとし きたく', '35.04111111', '135.7541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26102, 26, '京都市 上京区', 'きょうとし かみぎょうく', '35.02972222', '135.7566667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26103, 26, '京都市 左京区', 'きょうとし さきょうく', '35.04860433', '135.7785389');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26104, 26, '京都市 中京区', 'きょうとし なかぎょうく', '35.01', '135.7513889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26105, 26, '京都市 東山区', 'きょうとし ひがしやまく', '34.99694444', '135.7763889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26106, 26, '京都市 下京区', 'きょうとし しもぎょうく', '34.9875', '135.7555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26107, 26, '京都市 南区', 'きょうとし みなみく', '34.97666667', '135.7466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26108, 26, '京都市 右京区', 'きょうとし うきょうく', '35.01027778', '135.7158333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26109, 26, '京都市 伏見区', 'きょうとし ふしみく', '34.93611111', '135.7613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26110, 26, '京都市 山科区', 'きょうとし やましなく', '34.9725', '135.8136111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26111, 26, '京都市 西京区', 'きょうとし にしきょうく', '34.985', '135.6933333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26201, 26, '福知山市', 'ふくちやまし', '35.29666667', '135.1263889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26202, 26, '舞鶴市', 'まいづるし', '35.47472222', '135.3861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26203, 26, '綾部市', 'あやべし', '35.29888889', '135.2586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26204, 26, '宇治市', 'うじし', '34.88444444', '135.7997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26205, 26, '宮津市', 'みやづし', '35.53555556', '135.1955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26206, 26, '亀岡市', 'かめおかし', '35.01361111', '135.5738889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26207, 26, '城陽市', 'じょうようし', '34.85305556', '135.78');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26208, 26, '向日市', 'むこうし', '34.94861111', '135.6983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26209, 26, '長岡京市', 'ながおかきょうし', '34.92666667', '135.6955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26210, 26, '八幡市', 'やわたし', '34.87555556', '135.7077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26211, 26, '京田辺市', 'きょうたなべし', '34.81444444', '135.7677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26212, 26, '京丹後市', 'きょうたんごし', '35.62416667', '135.0611111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26213, 26, '南丹市', 'なんたんし', '35.10722222', '135.47');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26214, 26, '木津川市', 'きづがわし', '34.73694444', '135.8208333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26303, 26, '大山崎町', 'おおやまざきちょう', '34.90277778', '135.6886111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26322, 26, '久御山町', 'くみやまちょう', '34.88138889', '135.7327778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26343, 26, '井手町', 'いでちょう', '34.79861111', '135.8033333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26344, 26, '宇治田原町', 'うじたわらちょう', '34.85277778', '135.8569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26364, 26, '笠置町', 'かさぎちょう', '34.76055556', '135.9394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26365, 26, '和束町', 'わづかちょう', '34.79583333', '135.905');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26366, 26, '精華町', 'せいかちょう', '34.76083333', '135.7858333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26367, 26, '南山城村', 'みなみやましろむら', '34.77277778', '135.9938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26407, 26, '京丹波町', 'きょうたんばちょう', '35.16444444', '135.4233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26463, 26, '伊根町', 'いねちょう', '35.67527777', '135.2727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(26465, 26, '与謝野町', 'よさのちょう', '35.56527778', '135.1527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27100, 27, '大阪市', 'おおさかし', '34.69388889', '135.5022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27102, 27, '大阪市 都島区', 'おおさかし みやこじまく', '34.70138889', '135.5280556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27103, 27, '大阪市 福島区', 'おおさかし ふくしまく', '34.69222222', '135.4722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27104, 27, '大阪市 此花区', 'おおさかし このはなく', '34.68305556', '135.4522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27106, 27, '大阪市 西区', 'おおさかし にしく', '34.67638889', '135.4861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27107, 27, '大阪市 港区', 'おおさかし みなとく', '34.66388889', '135.4608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27108, 27, '大阪市 大正区', 'おおさかし たいしょうく', '34.65027778', '135.4727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27109, 27, '大阪市 天王寺区', 'おおさかし てんのうじく', '34.65777778', '135.5194444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27111, 27, '大阪市 浪速区', 'おおさかし なにわく', '34.65944444', '135.4997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27113, 27, '大阪市 西淀川区', 'おおさかし にしよどがわく', '34.71138889', '135.4561111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27114, 27, '大阪市 東淀川区', 'おおさかし ひがしよどがわく', '34.74111111', '135.5294444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27115, 27, '大阪市 東成区', 'おおさかし ひがしなりく', '34.67', '135.5411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27116, 27, '大阪市 生野区', 'おおさかし いくのく', '34.65361111', '135.5344444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27117, 27, '大阪市 旭区', 'おおさかし あさひく', '34.72138889', '135.5441667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27118, 27, '大阪市 城東区', 'おおさかし じょうとうく', '34.70194444', '135.5461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27119, 27, '大阪市 阿倍野区', 'おおさかし あべのく', '34.63861111', '135.5186111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27120, 27, '大阪市 住吉区', 'おおさかし すみよしく', '34.60361111', '135.5005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27121, 27, '大阪市 東住吉区', 'おおさかし ひがしすみよしく', '34.62194444', '135.5269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27122, 27, '大阪市 西成区', 'おおさかし にしなりく', '34.635', '135.4944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27123, 27, '大阪市 淀川区', 'おおさかし よどがわく', '34.72111111', '135.4866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27124, 27, '大阪市 鶴見区', 'おおさかし つるみく', '34.70444444', '135.5741667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27125, 27, '大阪市 住之江区', 'おおさかし すみのえく', '34.60944444', '135.4827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27126, 27, '大阪市 平野区', 'おおさかし ひらのく', '34.62111111', '135.5461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27127, 27, '大阪市 北区', 'おおさかし きたく', '34.70555556', '135.51');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27128, 27, '大阪市 中央区', 'おおさかし ちゅうおうく', '34.68111111', '135.5097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27140, 27, '堺市', 'さかいし', '34.57333333', '135.4830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27141, 27, '堺市 堺区', 'さかいし さかいく', '34.57333333', '135.4830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27142, 27, '堺市 中区', 'さかいし なかく', '34.52833333', '135.4988889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27143, 27, '堺市 東区', 'さかいし ひがしく', '34.53805556', '135.5363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27144, 27, '堺市 西区', 'さかいし にしく', '34.535', '135.4638889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27145, 27, '堺市 南区', 'さかいし みなみく', '34.48638889', '135.4902778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27146, 27, '堺市 北区', 'さかいし きたく', '34.56555556', '135.5172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27147, 27, '堺市 美原区', 'さかいし みはらく', '34.53861111', '135.5608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27202, 27, '岸和田市', 'きしわだし', '34.46027778', '135.3711111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27203, 27, '豊中市', 'とよなかし', '34.78138889', '135.47');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27204, 27, '池田市', 'いけだし', '34.82166667', '135.4286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27205, 27, '吹田市', 'すいたし', '34.75944444', '135.5169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27206, 27, '泉大津市', 'いずみおおつし', '34.50444444', '135.4102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27207, 27, '高槻市', 'たかつきし', '34.84611111', '135.6172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27208, 27, '貝塚市', 'かいづかし', '34.43777778', '135.3586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27209, 27, '守口市', 'もりぐちし', '34.7375', '135.5641667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27210, 27, '枚方市', 'ひらかたし', '34.81444444', '135.6508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27211, 27, '茨木市', 'いばらきし', '34.81638889', '135.5686111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27212, 27, '八尾市', 'やおし', '34.62694444', '135.6008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27213, 27, '泉佐野市', 'いずみさのし', '34.40666667', '135.3275');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27214, 27, '富田林市', 'とんだばやしし', '34.49916667', '135.5972222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27215, 27, '寝屋川市', 'ねやがわし', '34.76611111', '135.6280556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27216, 27, '河内長野市', 'かわちながのし', '34.45833333', '135.5641667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27217, 27, '松原市', 'まつばらし', '34.57805556', '135.5516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27218, 27, '大東市', 'だいとうし', '34.71194444', '135.6233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27219, 27, '和泉市', 'いずみし', '34.48361111', '135.4236111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27220, 27, '箕面市', 'みのおし', '34.82694444', '135.4705556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27221, 27, '柏原市', 'かしわらし', '34.57916667', '135.6286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27222, 27, '羽曳野市', 'はびきのし', '34.55777778', '135.6061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27223, 27, '門真市', 'かどまし', '34.73916667', '135.5869444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27224, 27, '摂津市', 'せっつし', '34.77722222', '135.5622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27225, 27, '高石市', 'たかいしし', '34.52055556', '135.4422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27226, 27, '藤井寺市', 'ふじいでらし', '34.57472222', '135.5975');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27227, 27, '東大阪市', 'ひがしおおさかし', '34.67944444', '135.6008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27228, 27, '泉南市', 'せんなんし', '34.36583333', '135.2736111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27229, 27, '四條畷市', 'しじょうなわてし', '34.74', '135.6394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27230, 27, '交野市', 'かたのし', '34.78805556', '135.68');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27231, 27, '大阪狭山市', 'おおさかさやまし', '34.50361111', '135.5555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27232, 27, '阪南市', 'はんなんし', '34.35944444', '135.2397222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27301, 27, '島本町', 'しまもとちょう', '34.88388889', '135.6627778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27321, 27, '豊能町', 'とよのちょう', '34.91888889', '135.4941667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27322, 27, '能勢町', 'のせちょう', '34.9725', '135.4141667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27341, 27, '忠岡町', 'ただおかちょう', '34.48694444', '135.4011111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27361, 27, '熊取町', 'くまとりちょう', '34.40138889', '135.3561111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27362, 27, '田尻町', 'たじりちょう', '34.39361111', '135.2911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27366, 27, '岬町', 'みさきちょう', '34.31694444', '135.1422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27381, 27, '太子町', 'たいしちょう', '34.51861111', '135.6480556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27382, 27, '河南町', 'かなんちょう', '34.49166667', '135.6297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(27383, 27, '千早赤阪村', 'ちはやあかさかむ', '34.46444444', '135.6225');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28100, 28, '神戸市', 'こうべし', '34.69', '135.1955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28101, 28, '神戸市 東灘区', 'こうべし ひがしなだく', '34.72027778', '135.2655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28102, 28, '神戸市 灘区', 'こうべし なだく', '34.7125', '135.2394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28105, 28, '神戸市 兵庫区', 'こうべし ひょうごく', '34.68055556', '135.1652778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28106, 28, '神戸市 長田区', 'こうべし ながたく', '34.66555556', '135.1508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28107, 28, '神戸市 須磨区', 'こうべし すまく', '34.65027778', '135.1302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28108, 28, '神戸市 垂水区', 'こうべし たるみく', '34.63055556', '135.0569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28109, 28, '神戸市 北区', 'こうべし きたく', '34.72722222', '135.1444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28110, 28, '神戸市 中央区', 'こうべし ちゅうおうく', '34.695', '135.1977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28111, 28, '神戸市 西区', 'こうべし にしく', '34.68305556', '134.9816667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28201, 28, '姫路市', 'ひめじし', '34.81527778', '134.6855556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28202, 28, '尼崎市', 'あまがさきし', '34.73333333', '135.4063889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28203, 28, '明石市', 'あかしし', '34.64305556', '134.9975');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28204, 28, '西宮市', 'にしのみやし', '34.73777778', '135.3419444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28205, 28, '洲本市', 'すもとし', '34.3425', '134.8955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28206, 28, '芦屋市', 'あしやし', '34.72694444', '135.3044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28207, 28, '伊丹市', 'いたみし', '34.78416667', '135.4008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28208, 28, '相生市', 'あいおいし', '34.80361111', '134.4680556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28209, 28, '豊岡市', 'とよおかし', '35.54444444', '134.82');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28210, 28, '加古川市', 'かこがわし', '34.75694444', '134.8413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28212, 28, '赤穂市', 'あこうし', '34.755', '134.3902778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28213, 28, '西脇市', 'にしわきし', '34.99333333', '134.9694444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28214, 28, '宝塚市', 'たからづかし', '34.8', '135.3602778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28215, 28, '三木市', 'みきし', '34.79666667', '134.99');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28216, 28, '高砂市', 'たかさごし', '34.76583333', '134.7905556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28217, 28, '川西市', 'かわにしし', '34.83', '135.4172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28218, 28, '小野市', 'おのし', '34.85305556', '134.9316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28219, 28, '三田市', 'さんだし', '34.88944444', '135.2252778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28220, 28, '加西市', 'かさいし', '34.92777778', '134.8419444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28221, 28, '丹波篠山市', 'たんばささやまし', '35.07583333', '135.2191667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28222, 28, '養父市', 'やぶし', '35.40472222', '134.7675');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28223, 28, '丹波市', 'たんばし', '35.17722222', '135.0358333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28224, 28, '南あわじ市', 'みなみあわじし', '34.29583333', '134.7791667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28225, 28, '朝来市', 'あさごし', '35.33972222', '134.8530556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28226, 28, '淡路市', 'あわじし', '34.44', '134.9147222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28227, 28, '宍粟市', 'しそうし', '35.00444444', '134.5494444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28228, 28, '加東市', 'かとうし', '34.9175', '134.9736111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28229, 28, 'たつの市', 'たつのし', '34.85805556', '134.5455556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28301, 28, '猪名川町', 'いながわちょう', '34.895', '135.3761111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28365, 28, '多可町', 'たかちょう', '35.05027778', '134.9233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28381, 28, '稲美町', 'いなみちょう', '34.74888889', '134.9136111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28382, 28, '播磨町', 'はりまちょう', '34.71527778', '134.8680556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28442, 28, '市川町', 'いちかわちょう', '34.98944444', '134.7630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28443, 28, '福崎町', 'ふくさきちょう', '34.95027778', '134.7602778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28446, 28, '神河町', 'かみかわちょう', '35.06416667', '134.7394444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28464, 28, '太子町', 'たいしちょう', '34.83361111', '134.5780556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28481, 28, '上郡町', 'かみごおりちょう', '34.87361111', '134.3561111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28501, 28, '佐用町', 'さようちょう', '35.00416667', '134.3558333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28585, 28, '香美町', 'かみちょう', '35.63222222', '134.6291667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(28586, 28, '新温泉町', 'しんおんせんちょう', '35.62333333', '134.4491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29201, 29, '奈良市', 'ならし', '34.685', '135.8047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29202, 29, '大和高田市', 'やまとたかだし', '34.515', '135.7363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29203, 29, '大和郡山市', 'やまとこおりやまし', '34.64944444', '135.7827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29204, 29, '天理市', 'てんりし', '34.59666667', '135.8372222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29205, 29, '橿原市', 'かしはらし', '34.50916667', '135.7925');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29206, 29, '桜井市', 'さくらいし', '34.51861111', '135.8433333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29207, 29, '五條市', 'ごじょうし', '34.35194444', '135.6938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29208, 29, '御所市', 'ごせし', '34.46333333', '135.7402778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29209, 29, '生駒市', 'いこまし', '34.69194444', '135.7005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29210, 29, '香芝市', 'かしばし', '34.54138889', '135.6991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29211, 29, '葛城市', 'かつらぎし', '34.48916667', '135.7266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29212, 29, '宇陀市', 'うだし', '34.52777778', '135.9525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29322, 29, '山添村', 'やまぞえむら', '34.68138889', '136.0438889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29342, 29, '平群町', 'へぐりちょう', '34.62916667', '135.7005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29343, 29, '三郷町', 'さんごうちょう', '34.60027778', '135.6955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29344, 29, '斑鳩町', 'いかるがちょう', '34.60888889', '135.7305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29345, 29, '安堵町', 'あんどちょう', '34.60666667', '135.7566667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29361, 29, '川西町', 'かわにしちょう', '34.58444444', '135.7741667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29362, 29, '三宅町', 'みやけちょう', '34.57361111', '135.7730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29363, 29, '田原本町', 'たわらもとちょう', '34.55666667', '135.795');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29385, 29, '曽爾村', 'そにむら', '34.51055556', '136.1247222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29386, 29, '御杖村', 'みつえむら', '34.48805556', '136.1661111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29401, 29, '高取町', 'たかとりちょう', '34.44944444', '135.7930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29402, 29, '明日香村', 'あすかむら', '34.47111111', '135.8205556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29424, 29, '上牧町', 'かんまきちょう', '34.56277778', '135.7166667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29425, 29, '王寺町', 'おうじちょう', '34.59472222', '135.7069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29426, 29, '広陵町', 'こうりょうちょう', '34.54277778', '135.7508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29427, 29, '河合町', 'かわいちょう', '34.57833333', '135.7366667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29441, 29, '吉野町', 'よしのちょう', '34.39611111', '135.8577778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29442, 29, '大淀町', 'おおよどちょう', '34.39055556', '135.79');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29443, 29, '下市町', 'しもいちちょう', '34.36111111', '135.7919444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29444, 29, '黒滝村', 'くろたきむら', '34.30916667', '135.8522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29446, 29, '天川村', 'てんかわむら', '34.24194444', '135.8552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29447, 29, '野迫川村', 'のせがわむら', '34.16638889', '135.6330556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29449, 29, '十津川村', 'とつかわむら', '33.98861111', '135.7925');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29450, 29, '下北山村', 'しもきたやまむら', '34.005', '135.9552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29451, 29, '上北山村', 'かみきたやまむら', '34.13444444', '136.0002778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29452, 29, '川上村', 'かわかみむら', '34.33833333', '135.9544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(29453, 29, '東吉野村', 'ひがしよしのむら', '34.40361111', '135.9683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30201, 30, '和歌山市', 'わかやまし', '34.23055556', '135.1708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30202, 30, '海南市', 'かいなんし', '34.15555556', '135.2091667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30203, 30, '橋本市', 'はしもとし', '34.31472222', '135.6052778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30204, 30, '有田市', 'ありだし', '34.08305556', '135.1277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30205, 30, '御坊市', 'ごぼうし', '33.89138889', '135.1525');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30206, 30, '田辺市', 'たなべし', '33.72805556', '135.3777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30207, 30, '新宮市', 'しんぐうし', '33.72416667', '135.9925');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30208, 30, '紀の川市', 'きのかわし', '34.26972222', '135.3625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30209, 30, '岩出市', 'いわでし', '34.25638889', '135.3111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30304, 30, '紀美野町', 'きみのちょう', '34.16694444', '135.3080556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30341, 30, 'かつらぎ町', 'かつらぎちょう', '34.29638889', '135.5041667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30343, 30, '九度山町', 'くどやまちょう', '34.28722222', '135.5622222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30344, 30, '高野町', 'こうやちょう', '34.21611111', '135.5866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30361, 30, '湯浅町', 'ゆあさちょう', '34.03305556', '135.1786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30362, 30, '広川町', 'ひろがわちょう', '34.03', '135.1730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30366, 30, '有田川町', 'ありだがわちょう', '34.0575', '135.2161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30381, 30, '美浜町', 'みはまちょう', '33.89361111', '135.1333333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30382, 30, '日高町', 'ひだかちょう', '33.92555556', '135.1408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30383, 30, '由良町', 'ゆらちょう', '33.95944444', '135.1183333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30390, 30, '印南町', 'いなみちょう', '33.81833333', '135.2180556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30391, 30, 'みなべ町', 'みなべちょう', '33.7725', '135.3216667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30392, 30, '日高川町', 'ひだかがわちょう', '33.91166667', '135.1861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30401, 30, '白浜町', 'しらはまちょう', '33.67805556', '135.3480556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30404, 30, '上富田町', 'かみとんだちょう', '33.69611111', '135.4288889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30406, 30, 'すさみ町', 'すさみちょう', '33.55027778', '135.4966667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30421, 30, '那智勝浦町', 'なちかつうらちょう', '33.62611111', '135.9408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30422, 30, '太地町', 'たいじちょう', '33.59416667', '135.9438889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30424, 30, '古座川町', 'こざがわちょう', '33.53194444', '135.8147222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30427, 30, '北山村', 'きたやまむら', '33.93194444', '135.9694444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(30428, 30, '串本町', 'くしもとちょう', '33.4725', '135.7813889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31201, 31, '鳥取市', 'とっとりし', '35.50111111', '134.2352778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31202, 31, '米子市', 'よなごし', '35.42805556', '133.3311111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31203, 31, '倉吉市', 'くらよしし', '35.43', '133.8255556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31204, 31, '境港市', 'さかいみなとし', '35.53972222', '133.2316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31302, 31, '岩美町', 'いわみちょう', '35.57583333', '134.3319444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31325, 31, '若桜町', 'わかさちょう', '35.34', '134.4008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31328, 31, '智頭町', 'ちづちょう', '35.265', '134.2266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31329, 31, '八頭町', 'やずちょう', '35.40916667', '134.2508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31364, 31, '三朝町', 'みささちょう', '35.40861111', '133.8625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31370, 31, '湯梨浜町', 'ゆりはまちょう', '35.49', '133.8647222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31371, 31, '琴浦町', 'ことうらちょう', '35.49527778', '133.6927778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31372, 31, '北栄町', 'ほくえいちょう', '35.49', '133.7586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31384, 31, '日吉津村', 'ひえづそん', '35.44027778', '133.3805556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31386, 31, '大山町', 'だいせんちょう', '35.51083333', '133.4961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31389, 31, '南部町', 'なんぶちょう', '35.34027778', '133.3266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31390, 31, '伯耆町', 'ほうきちょう', '35.38527778', '133.4075');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31401, 31, '日南町', 'にちなんちょう', '35.16305556', '133.3061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31402, 31, '日野町', 'ひのちょう', '35.24083333', '133.4427778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(31403, 31, '江府町', 'こうふちょう', '35.28305556', '133.4886111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32201, 32, '松江市', 'まつえし', '35.46805556', '133.0486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32202, 32, '浜田市', 'はまだし', '34.89916667', '132.08');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32203, 32, '出雲市', 'いずもし', '35.36694444', '132.7547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32204, 32, '益田市', 'ますだし', '34.675', '131.8427778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32205, 32, '大田市', 'おおだし', '35.19222222', '132.4997222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32206, 32, '安来市', 'やすぎし', '35.43166667', '133.2508333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32207, 32, '江津市', 'ごうつし', '35.01138889', '132.2211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32209, 32, '雲南市', 'うんなんし', '35.28777778', '132.9005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32343, 32, '奥出雲町', 'おくいずもちょう', '35.1975', '133.0025');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32386, 32, '飯南町', 'いいなんちょう', '35', '132.7138889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32441, 32, '川本町', 'かわもとまち', '34.99416667', '132.4952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32448, 32, '美郷町', 'みさとちょう', '35.07666667', '132.5911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32449, 32, '邑南町', 'おおなんちょう', '34.89388889', '132.4377778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32501, 32, '津和野町', 'つわのちょう', '34.54361111', '131.8383333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32505, 32, '吉賀町', 'よしかちょう', '34.35361111', '131.935');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32525, 32, '海士町', 'あまちょう', '36.09666667', '133.0969444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32526, 32, '西ノ島町', 'にしのしまちょう', '36.09333333', '132.9944444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32527, 32, '知夫村', 'ちぶむら', '36.01416667', '133.0397222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35343, 35, '田布施町', 'たぶせちょう', '33.95472222', '132.0413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(32528, 32, '隠岐の島町', 'おきのしまちょう', '36.20916667', '133.3219444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33100, 33, '岡山市', 'おかやまし', '34.655', '133.9197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33101, 33, '岡山市 北区', 'おかやまし きたく', '34.655', '133.9197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33102, 33, '岡山市 中区', 'おかやまし なかく', '34.67083333', '133.9430556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33103, 33, '岡山市 東区', 'おかやまし ひがしく', '34.65833333', '134.0363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33104, 33, '岡山市 南区', 'おかやまし みなみく', '34.54388889', '133.8652778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33202, 33, '倉敷市', 'くらしきし', '34.585', '133.7719444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33203, 33, '津山市', 'つやまし', '35.06944444', '134.0044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33204, 33, '玉野市', 'たまのし', '34.49194444', '133.9458333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33205, 33, '笠岡市', 'かさおかし', '34.50722222', '133.5072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33207, 33, '井原市', 'いばらし', '34.59777778', '133.4638889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33208, 33, '総社市', 'そうじゃし', '34.67277778', '133.7466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33209, 33, '高梁市', 'たかはしし', '34.79138889', '133.6166667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33210, 33, '新見市', 'にいみし', '34.97722222', '133.4702778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33211, 33, '備前市', 'びぜんし', '34.745', '134.1880556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33212, 33, '瀬戸内市', 'せとうちし', '34.665', '134.0927778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33213, 33, '赤磐市', 'あかいわし', '34.75527778', '134.0188889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33214, 33, '真庭市', 'まにわし', '35.07555556', '133.7527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33215, 33, '美作市', 'みまさかし', '35.00861111', '134.1486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33216, 33, '浅口市', 'あさくちし', '34.52777778', '133.585');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33346, 33, '和気町', 'わけちょう', '34.80277778', '134.1575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33423, 33, '早島町', 'はやしまちょう', '34.60055556', '133.8283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33445, 33, '里庄町', 'さとしょうちょう', '34.51361111', '133.5569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33461, 33, '矢掛町', 'やかげちょう', '34.62777778', '133.5872222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33586, 33, '新庄村', 'しんじょうそん', '35.17944444', '133.5677778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33606, 33, '鏡野町', 'かがみのちょう', '35.09194444', '133.9330556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33622, 33, '勝央町', 'しょうおうちょう', '35.04194444', '134.1161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33623, 33, '奈義町', 'なぎちょう', '35.12305556', '134.1775');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33643, 33, '西粟倉村', 'にしあわくらそん', '35.17138889', '134.3363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33663, 33, '久米南町', 'くめなんちょう', '34.92916667', '133.9608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33666, 33, '美咲町', 'みさきちょう', '34.99777778', '133.9583333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(33681, 33, '吉備中央町', 'きびちゅうおうちょう', '34.8625', '133.6938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34100, 34, '広島市', 'ひろしまし', '34.38527778', '132.4552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34101, 34, '広島市 中区', 'ひろしまし なかく', '34.38611111', '132.4552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34102, 34, '広島市 東区', 'ひろしまし ひがしく', '34.39527778', '132.4827778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34103, 34, '広島市 南区', 'ひろしまし みなみく', '34.38', '132.4691667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34104, 34, '広島市 西区', 'ひろしまし にしく', '34.39388889', '132.4344444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34105, 34, '広島市 安佐南区', 'ひろしまし あさみなみく', '34.45194444', '132.4716667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34106, 34, '広島市 安佐北区', 'ひろしまし あさきたく', '34.51833333', '132.5077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34107, 34, '広島市 安芸区', 'ひろしまし あきく', '34.37166667', '132.5255556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34108, 34, '広島市 佐伯区', 'ひろしまし さえきく', '34.36444444', '132.3608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34202, 34, '呉市', 'くれし', '34.24916667', '132.5658333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34203, 34, '竹原市', 'たけはらし', '34.34166667', '132.9069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34204, 34, '三原市', 'みはらし', '34.3975', '133.0786111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34205, 34, '尾道市', 'おのみちし', '34.40888889', '133.205');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34207, 34, '福山市', 'ふくやまし', '34.48583333', '133.3625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34208, 34, '府中市', 'ふちゅうし', '34.56833333', '133.2363889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34209, 34, '三次市', 'みよしし', '34.80583333', '132.8516667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34210, 34, '庄原市', 'しょうばらし', '34.85777778', '133.0166667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34211, 34, '大竹市', 'おおたけし', '34.23805556', '132.2222222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34212, 34, '東広島市', 'ひがしひろしまし', '34.42694444', '132.7436111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34213, 34, '廿日市市', 'はつかいちし', '34.34861111', '132.3316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34214, 34, '安芸高田市', 'あきたかたし', '34.66638889', '132.7038889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34215, 34, '江田島市', 'えたじまし', '34.17490134', '132.46229356');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34302, 34, '府中町', 'ふちゅうちょう', '34.3925', '132.5044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34304, 34, '海田町', 'かいたちょう', '34.37222222', '132.5361111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34307, 34, '熊野町', 'くまのちょう', '34.33583333', '132.5844444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34309, 34, '坂町', 'さかちょう', '34.34138889', '132.5138889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34368, 34, '安芸太田町', 'あきおおたちょう', '34.57666667', '132.2269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34369, 34, '北広島町', 'きたひろしまちょう', '34.67444444', '132.5383333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34431, 34, '大崎上島町', 'おおさきかみじまちょう', '34.26972222', '132.9152778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34462, 34, '世羅町', 'せらちょう', '34.58666667', '133.0566667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(34545, 34, '神石高原町', 'じんせきこうげんちょう', '34.70361111', '133.2477778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35201, 35, '下関市', 'しものせきし', '33.95777778', '130.9413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35202, 35, '宇部市', 'うべし', '33.95166667', '131.2466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35203, 35, '山口市', 'やまぐちし', '34.17833333', '131.4738889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35204, 35, '萩市', 'はぎし', '34.40805556', '131.3991667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35206, 35, '防府市', 'ほうふし', '34.05194444', '131.5627778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35207, 35, '下松市', 'くだまつし', '34.015', '131.8702778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35208, 35, '岩国市', 'いわくにし', '34.16694444', '132.2197222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35210, 35, '光市', 'ひかりし', '33.96166667', '131.9422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35211, 35, '長門市', 'ながとし', '34.37111111', '131.1822222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35212, 35, '柳井市', 'やないし', '33.96388889', '132.1016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35213, 35, '美祢市', 'みねし', '34.16666667', '131.2058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35215, 35, '周南市', 'しゅうなんし', '34.05527778', '131.8061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35216, 35, '山陽小野田市', 'さんようおのだし', '34.00333333', '131.1819444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35305, 35, '周防大島町', 'すおうおおしまちょう', '33.9275', '132.1952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35321, 35, '和木町', 'わきちょう', '34.20222222', '132.2202778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35341, 35, '上関町', 'かみのせきちょう', '33.83083333', '132.1108333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35344, 35, '平生町', 'ひらおちょう', '33.93805556', '132.0733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(35502, 35, '阿武町', 'あぶちょう', '34.50333333', '131.4711111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36201, 36, '徳島市', 'とくしまし', '34.07027778', '134.5547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36202, 36, '鳴門市', 'なるとし', '34.1725', '134.6088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36203, 36, '小松島市', 'こまつしまし', '34.00472222', '134.5905556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36204, 36, '阿南市', 'あなんし', '33.92166667', '134.6594444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36205, 36, '吉野川市', 'よしのがわし', '34.06638889', '134.3586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36206, 36, '阿波市', 'あわし', '34.08222222', '134.2358333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36207, 36, '美馬市', 'みまし', '34.05333333', '134.17');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36208, 36, '三好市', 'みよしし', '34.02583333', '133.8072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36301, 36, '勝浦町', 'かつうらちょう', '33.93138889', '134.5113889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36302, 36, '上勝町', 'かみかつちょう', '33.88888889', '134.4019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36321, 36, '佐那河内村', 'さなごうちそん', '33.99305556', '134.4533333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36341, 36, '石井町', 'いしいちょう', '34.07472222', '134.4405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36342, 36, '神山町', 'かみやまちょう', '33.96722222', '134.3505556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36368, 36, '那賀町', 'なかちょう', '33.85722222', '134.4958333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36383, 36, '牟岐町', 'むぎちょう', '33.66833333', '134.4208333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36387, 36, '美波町', 'みなみちょう', '33.73472222', '134.5355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36388, 36, '海陽町', 'かいようちょう', '33.60194444', '134.3519444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36401, 36, '松茂町', 'まつしげちょう', '34.13388889', '134.5802778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36402, 36, '北島町', 'きたじまちょう', '34.12555556', '134.5469444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36403, 36, '藍住町', 'あいずみちょう', '34.12666667', '134.495');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36404, 36, '板野町', 'いたのちょう', '34.14416667', '134.4625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36405, 36, '上板町', 'かみいたちょう', '34.12138889', '134.405');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36468, 36, 'つるぎ町', 'つるぎちょう', '34.03722222', '134.0641667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(36489, 36, '東みよし町', 'ひがしみよしちょう', '34.03666667', '133.9369444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37201, 37, '高松市', 'たかまつし', '34.34277778', '134.0466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37202, 37, '丸亀市', 'まるがめし', '34.28944444', '133.7977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37203, 37, '坂出市', 'さかいでし', '34.31638889', '133.8605556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37204, 37, '善通寺市', 'ぜんつうじし', '34.22833333', '133.7872222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37205, 37, '観音寺市', 'かんおんじし', '34.12722222', '133.6616667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37206, 37, 'さぬき市', 'さぬきし', '34.32527778', '134.1722222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37207, 37, '東かがわ市', 'ひがしかがわし', '34.24388889', '134.3588889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37208, 37, '三豊市', 'みとよし', '34.18277777', '133.715');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37322, 37, '土庄町', 'とのしょうちょう', '34.48611111', '134.1858333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37324, 37, '小豆島町', 'しょうどしまちょう', '34.48194444', '134.2336111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37341, 37, '三木町', 'みきちょう', '34.26833333', '134.1344444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37364, 37, '直島町', 'なおしまちょう', '34.46', '133.9955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37386, 37, '宇多津町', 'うたづちょう', '34.31055556', '133.8255556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37387, 37, '綾川町', 'あやがわちょう', '34.24944444', '133.9230556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37403, 37, '琴平町', 'ことひらちょう', '34.19138889', '133.8233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37404, 37, '多度津町', 'たどつちょう', '34.2725', '133.7536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(37406, 37, 'まんのう町', 'まんのうちょう', '34.19222222', '133.8413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38201, 38, '松山市', 'まつやまし', '33.83916667', '132.7655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38202, 38, '今治市', 'いまばりし', '34.06611111', '132.9977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38203, 38, '宇和島市', 'うわじまし', '33.22333333', '132.5605556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38204, 38, '八幡浜市', 'やわたはまし', '33.46305556', '132.4233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38205, 38, '新居浜市', 'にいはまし', '33.96027778', '133.2833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38206, 38, '西条市', 'さいじょうし', '33.91972222', '133.1811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38207, 38, '大洲市', 'おおずし', '33.50638889', '132.5447222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38210, 38, '伊予市', 'いよし', '33.7575', '132.7038889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38213, 38, '四国中央市', 'しこくちゅうおうし', '33.98083333', '133.5491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38214, 38, '西予市', 'せいよし', '33.36305556', '132.5111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38215, 38, '東温市', 'とうおんし', '33.79111111', '132.8719444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38356, 38, '上島町', 'かみじまちょう', '34.2575', '133.2044444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38386, 38, '久万高原町', 'くまこうげんちょう', '33.65555556', '132.9016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38401, 38, '松前町', 'まさきちょう', '33.7875', '132.7113889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38402, 38, '砥部町', 'とべちょう', '33.74916667', '132.7922222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38422, 38, '内子町', 'うちこちょう', '33.53305556', '132.6580556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38442, 38, '伊方町', 'いかたちょう', '33.48833333', '132.3541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38484, 38, '松野町', 'まつのちょう', '33.22722222', '132.7108333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38488, 38, '鬼北町', 'きほくちょう', '33.25583333', '132.6841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(38506, 38, '愛南町', 'あいなんちょう', '32.96222222', '132.5833333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39201, 39, '高知市', 'こうちし', '33.55888889', '133.5313889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39202, 39, '室戸市', 'むろとし', '33.29', '134.1519444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39203, 39, '安芸市', 'あきし', '33.5025', '133.9072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39204, 39, '南国市', 'なんこくし', '33.57555556', '133.6413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39205, 39, '土佐市', 'とさし', '33.49611111', '133.4252778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39206, 39, '須崎市', 'すさきし', '33.40083333', '133.2830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39208, 39, '宿毛市', 'すくもし', '32.93888889', '132.7261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39209, 39, '土佐清水市', 'とさしみずし', '32.78138889', '132.955');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39210, 39, '四万十市', 'しまんとし', '32.99138889', '132.9338889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39211, 39, '香南市', 'こうなんし', '33.56416667', '133.7005556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39212, 39, '香美市', 'かみし', '33.60388889', '133.6861111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39301, 39, '東洋町', 'とうようちょう', '33.52805556', '134.28');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39302, 39, '奈半利町', 'なはりちょう', '33.42416667', '134.0211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39303, 39, '田野町', 'たのちょう', '33.42777778', '134.0083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39304, 39, '安田町', 'やすだちょう', '33.43833333', '133.9811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39305, 39, '北川村', 'きたがわむら', '33.44777778', '134.0422222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39306, 39, '馬路村', 'うまじむら', '33.55527778', '134.0480556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39307, 39, '芸西村', 'げいせいむら', '33.52694444', '133.8091667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39341, 39, '本山町', 'もとやまちょう', '33.75694444', '133.5916667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39344, 39, '大豊町', 'おおとよちょう', '33.76416667', '133.6641667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39363, 39, '土佐町', 'とさちょう', '33.73694444', '133.5322222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39364, 39, '大川村', 'おおかわむら', '33.78361111', '133.4666667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39386, 39, 'いの町', 'いのちょう', '33.54861111', '133.4277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39387, 39, '仁淀川町', 'によどがわちょう', '33.57527778', '133.1683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39401, 39, '中土佐町', 'なかとさちょう', '33.3275', '133.2283333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39402, 39, '佐川町', 'さかわちょう', '33.50083333', '133.2866667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39403, 39, '越知町', 'おちちょう', '33.53277778', '133.2519444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39405, 39, '檮原町', 'ゆすはらちょう', '33.39194444', '132.9269444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39410, 39, '日高村', 'ひだかむら', '33.53472222', '133.3733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39411, 39, '津野町', 'つのちょう', '33.44666667', '133.1994444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39412, 39, '四万十町', 'しまんとちょう', '33.20833333', '133.1355556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39424, 39, '大月町', 'おおつきちょう', '32.84138889', '132.7069444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39427, 39, '三原村', 'みはらむら', '32.90611111', '132.8472222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(39428, 39, '黒潮町', 'くろしおちょう', '33.025', '133.0108333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40100, 40, '北九州市', 'きたきゅうしゅうし', '33.88333333', '130.8752778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40101, 40, '北九州市 門司区', 'きたきゅうしゅうし もじく', '33.94111111', '130.9597222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40103, 40, '北九州市 若松区', 'きたきゅうしゅうし わかまつく', '33.90555556', '130.8111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40105, 40, '北九州市 戸畑区', 'きたきゅうしゅうし とばたく', '33.89333333', '130.8297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40106, 40, '北九州市 小倉北区', 'きたきゅうしゅうし こくらきたく', '33.88083333', '130.8736111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40107, 40, '北九州市 小倉南区', 'きたきゅうしゅうし こくらみなみく', '33.84638889', '130.8847222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40108, 40, '北九州市 八幡東区', 'きたきゅうしゅうし やはたひがしく', '33.86361111', '130.8119444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40109, 40, '北九州市 八幡西区', 'きたきゅうしゅうし やはたにしく', '33.86138889', '130.7602778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40130, 40, '福岡市', 'ふくおかし', '33.59', '130.4016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40131, 40, '福岡市 東区', 'ふくおかし ひがしく', '33.61777778', '130.4175');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40132, 40, '福岡市 博多区', 'ふくおかし はかたく', '33.59138889', '130.415');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40133, 40, '福岡市 中央区', 'ふくおかし ちゅうおうく', '33.58916667', '130.3930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40134, 40, '福岡市 南区', 'ふくおかし みなみく', '33.56166667', '130.4266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40135, 40, '福岡市 西区', 'ふくおかし にしく', '33.58277778', '130.3230556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40136, 40, '福岡市 城南区', 'ふくおかし じょうなんく', '33.57583333', '130.37');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40137, 40, '福岡市 早良区', 'ふくおかし さわらく', '33.58194444', '130.3483333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40202, 40, '大牟田市', 'おおむたし', '33.03027778', '130.4461111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40203, 40, '久留米市', 'くるめし', '33.31944444', '130.5083333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40204, 40, '直方市', 'のおがたし', '33.74388889', '130.7297222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40205, 40, '飯塚市', 'いいづかし', '33.64583333', '130.6913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40206, 40, '田川市', 'たがわし', '33.63888889', '130.8061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40207, 40, '柳川市', 'やながわし', '33.16305556', '130.4061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40210, 40, '八女市', 'やめし', '33.21194444', '130.5577778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40211, 40, '筑後市', 'ちくごし', '33.21222222', '130.5022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40212, 40, '大川市', 'おおかわし', '33.20666667', '130.3838889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40213, 40, '行橋市', 'ゆくはしし', '33.72861111', '130.9830556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40214, 40, '豊前市', 'ぶぜんし', '33.61166667', '131.1302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40215, 40, '中間市', 'なかまし', '33.81666667', '130.7091667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40216, 40, '小郡市', 'おごおりし', '33.39638889', '130.5555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40217, 40, '筑紫野市', 'ちくしのし', '33.49638889', '130.5155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40218, 40, '春日市', 'かすがし', '33.53277778', '130.4702778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40219, 40, '大野城市', 'おおのじょうし', '33.53638889', '130.4788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40220, 40, '宗像市', 'むなかたし', '33.80555556', '130.5405556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40221, 40, '太宰府市', 'だざいふし', '33.51277778', '130.5238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40223, 40, '古賀市', 'こがし', '33.72888889', '130.47');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40224, 40, '福津市', 'ふくつし', '33.76694444', '130.4911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40225, 40, 'うきは市', 'うきはし', '33.34722222', '130.755');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40226, 40, '宮若市', 'みやわかし', '33.72361111', '130.6666667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40227, 40, '嘉麻市', 'かまし', '33.56333333', '130.7116667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40228, 40, '朝倉市', 'あさくらし', '33.42333333', '130.6655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40229, 40, 'みやま市', 'みやまし', '33.1525', '130.4747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40230, 40, '糸島市', 'いとしまし', '33.55722222', '130.1955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40231, 40, '那珂川市', 'なかがわし', '33.49944444', '130.4222222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40341, 40, '宇美町', 'うみまち', '33.56777778', '130.5111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40342, 40, '篠栗町', 'ささぐりまち', '33.62388889', '130.5263889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40343, 40, '志免町', 'しめまち', '33.59138889', '130.4797222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40344, 40, '須恵町', 'すえまち', '33.58722222', '130.5072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40345, 40, '新宮町', 'しんぐうまち', '33.71527778', '130.4466667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40348, 40, '久山町', 'ひさやままち', '33.64666667', '130.5');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40349, 40, '粕屋町', 'かすやまち', '33.61083333', '130.4805556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40381, 40, '芦屋町', 'あしやまち', '33.89388889', '130.6638889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40382, 40, '水巻町', 'みずまきまち', '33.85472222', '130.6947222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40383, 40, '岡垣町', 'おかがきまち', '33.85361111', '130.6113889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40384, 40, '遠賀町', 'おんがちょう', '33.84805556', '130.6683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40401, 40, '小竹町', 'こたけまち', '33.6925', '130.7127778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40402, 40, '鞍手町', 'くらてまち', '33.79194444', '130.6741667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40421, 40, '桂川町', 'けいせんまち', '33.57888889', '130.6780556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40447, 40, '筑前町', 'ちくぜんまち', '33.45694444', '130.5952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40448, 40, '東峰村', 'とうほうむら', '33.39722222', '130.87');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40503, 40, '大刀洗町', 'たちあらいまち', '33.3725', '130.6225');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40522, 40, '大木町', 'おおきまち', '33.21055556', '130.4397222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40544, 40, '広川町', 'ひろかわまち', '33.24138889', '130.5513889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40601, 40, '香春町', 'かわらまち', '33.66805556', '130.8472222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40602, 40, '添田町', 'そえだまち', '33.57166667', '130.8541667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40604, 40, '糸田町', 'いとだまち', '33.65277778', '130.7791667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40605, 40, '川崎町', 'かわさきまち', '33.6', '130.8152778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40608, 40, '大任町', 'おおとうまち', '33.61222222', '130.8522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40609, 40, '赤村', 'あかむら', '33.61666667', '130.8708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40610, 40, '福智町', 'ふくちまち', '33.68333333', '130.78');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40621, 40, '苅田町', 'かんだまち', '33.77611111', '130.9805556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40625, 40, 'みやこ町', 'みやこまち', '33.69916667', '130.9205556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40642, 40, '吉富町', 'よしとみまち', '33.60277778', '131.1761111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40646, 40, '上毛町', 'こうげまち', '33.57833333', '131.1644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(40647, 40, '築上町', 'ちくじょうまち', '33.65611111', '131.0561111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41201, 41, '佐賀市', 'さがし', '33.26333333', '130.3008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41202, 41, '唐津市', 'からつし', '33.45', '129.9686111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41203, 41, '鳥栖市', 'とすし', '33.37777778', '130.5061111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41204, 41, '多久市', 'たくし', '33.28861111', '130.1102778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41205, 41, '伊万里市', 'いまりし', '33.26472222', '129.8808333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41206, 41, '武雄市', 'たけおし', '33.19388889', '130.0191667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41207, 41, '鹿島市', 'かしまし', '33.10416667', '130.0986111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41208, 41, '小城市', 'おぎし', '33.25055556', '130.2016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41209, 41, '嬉野市', 'うれしのし', '33.12777778', '130.06');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41210, 41, '神埼市', 'かんざきし', '33.31083333', '130.3730556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41327, 41, '吉野ヶ里町', 'よしのがりちょう', '33.32111111', '130.3988889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41341, 41, '基山町', 'きやまちょう', '33.42694444', '130.5230556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41345, 41, '上峰町', 'かみみねちょう', '33.31944444', '130.4261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41346, 41, 'みやき町', 'みやきちょう', '33.325', '130.4544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41387, 41, '玄海町', 'げんかいちょう', '33.47222222', '129.8747222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41401, 41, '有田町', 'ありたちょう', '33.21055556', '129.8491667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41423, 41, '大町町', 'おおまちちょう', '33.21388889', '130.1161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41424, 41, '江北町', 'こうほくまち', '33.22055556', '130.1572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41425, 41, '白石町', 'しろいしちょう', '33.18083333', '130.1433333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(41441, 41, '太良町', 'たらちょう', '33.01944444', '130.1791667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42201, 42, '長崎市', 'ながさきし', '32.75027778', '129.8777778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42202, 42, '佐世保市', 'させぼし', '33.18', '129.7155556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42203, 42, '島原市', 'しまばらし', '32.78805556', '130.3705556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42204, 42, '諫早市', 'いさはやし', '32.84416667', '130.0536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42205, 42, '大村市', 'おおむらし', '32.9', '129.9583333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42207, 42, '平戸市', 'ひらどし', '33.36805556', '129.5538889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42208, 42, '松浦市', 'まつうらし', '33.34111111', '129.7091667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42209, 42, '対馬市', 'つしまし', '34.20277778', '129.2875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42210, 42, '壱岐市', 'いきし', '33.75', '129.6911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42211, 42, '五島市', 'ごとうし', '32.69555556', '128.8408333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42212, 42, '西海市', 'さいかいし', '32.93305556', '129.6430556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42213, 42, '雲仙市', 'うんぜんし', '32.835', '130.1875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42214, 42, '南島原市', 'みなみしまばらし', '32.65972222', '130.2977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42307, 42, '長与町', 'ながよちょう', '32.82527778', '129.875');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42308, 42, '時津町', 'とぎつちょう', '32.82888889', '129.8486111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42321, 42, '東彼杵町', 'ひがしそのぎちょう', '33.03694444', '129.9172222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42322, 42, '川棚町', 'かわたなちょう', '33.07277778', '129.8613889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42323, 42, '波佐見町', 'はさみちょう', '33.13805556', '129.8955556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42383, 42, '小値賀町', 'おぢかちょう', '33.19111111', '129.0591667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42391, 42, '佐々町', 'さざちょう', '33.23833333', '129.6505556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(42411, 42, '新上五島町', 'しんかみごとうちょう', '32.98444444', '129.0733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43100, 43, '熊本市', 'くまもとし', '32.80333333', '130.7080556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43101, 43, '熊本市 中央区', 'くまもとし ちゅうおうく', '32.80328437', '130.708129');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43102, 43, '熊本市 東区', 'くまもとし ひがしく', '32.78026533', '130.7672631');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43103, 43, '熊本市 西区', 'くまもとし にしく', '32.77648925', '130.6475529');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43104, 43, '熊本市 南区', 'くまもとし みなみく', '32.71526057', '130.6789092');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43105, 43, '熊本市 北区', 'くまもとし きたく', '32.9036181', '130.694254');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43202, 43, '八代市', 'やつしろし', '32.5075', '130.6019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43203, 43, '人吉市', 'ひとよしし', '32.21', '130.7625');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43204, 43, '荒尾市', 'あらおし', '32.98666667', '130.4333333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43205, 43, '水俣市', 'みなまたし', '32.21194444', '130.4088889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43206, 43, '玉名市', 'たまなし', '32.92805556', '130.5597222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43208, 43, '山鹿市', 'やまがし', '33.01666667', '130.6913889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43210, 43, '菊池市', 'きくちし', '32.97972222', '130.8130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43211, 43, '宇土市', 'うとし', '32.68722715', '130.6586359');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43212, 43, '上天草市', 'かみあまくさし', '32.5875', '130.4305556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43213, 43, '宇城市', 'うきし', '32.64777778', '130.6841667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43214, 43, '阿蘇市', 'あそし', '32.95222222', '131.1213889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43215, 43, '天草市', 'あまくさし', '32.45861111', '130.1930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43216, 43, '合志市', 'こうしし', '32.88583333', '130.7897222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43348, 43, '美里町', 'みさとまち', '32.63972222', '130.7888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43364, 43, '玉東町', 'ぎょくとうまち', '32.91888889', '130.6286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43367, 43, '南関町', 'なんかんまち', '33.06166667', '130.5413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43368, 43, '長洲町', 'ながすまち', '32.92972222', '130.4527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43369, 43, '和水町', 'なごみまち', '32.97805556', '130.6058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43403, 43, '大津町', 'おおづまち', '32.87888889', '130.8683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43404, 43, '菊陽町', 'きくようまち', '32.8625', '130.8286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43423, 43, '南小国町', 'みなみおぐにまち', '33.09833333', '131.0708333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43424, 43, '小国町', 'おぐにまち', '33.12138889', '131.0683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43425, 43, '産山村', 'うぶやまむら', '32.99555556', '131.2169444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43428, 43, '高森町', 'たかもりまち', '32.82722222', '131.1219444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43432, 43, '西原村', 'にしはらむら', '32.83472222', '130.9030556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43433, 43, '南阿蘇村', 'みなみあそむら', '32.8225', '131.0313889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43441, 43, '御船町', 'みふねまち', '32.71444444', '130.8019444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43442, 43, '嘉島町', 'かしままち', '32.74', '130.7572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43443, 43, '益城町', 'ましきまち', '32.79138889', '130.8163889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43444, 43, '甲佐町', 'こうさまち', '32.65138889', '130.8116667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43447, 43, '山都町', 'やまとちょう', '32.685', '130.99');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43468, 43, '氷川町', 'ひかわちょう', '32.5825', '130.6736111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43482, 43, '芦北町', 'あしきたまち', '32.29888889', '130.4930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43484, 43, '津奈木町', 'つなぎまち', '32.23388889', '130.4402778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43501, 43, '錦町', 'にしきまち', '32.20111111', '130.8411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43505, 43, '多良木町', 'たらぎまち', '32.26416667', '130.9358333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43506, 43, '湯前町', 'ゆのまえまち', '32.27611111', '130.9811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43507, 43, '水上村', 'みずかみむら', '32.31444444', '131.0094444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43510, 43, '相良村', 'さがらむら', '32.23527778', '130.7980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43511, 43, '五木村', 'いつきむら', '32.39694444', '130.8277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43512, 43, '山江村', 'やまえむら', '32.24638889', '130.7672222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43513, 43, '球磨村', 'くまむら', '32.25277778', '130.6513889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43514, 43, 'あさぎり町', 'あさぎりちょう', '32.24027778', '130.8980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(43531, 43, '苓北町', 'れいほくまち', '32.51305556', '130.0547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44201, 44, '大分市', 'おおいたし', '33.23944444', '131.6097222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44202, 44, '別府市', 'べっぷし', '33.28472222', '131.4911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44203, 44, '中津市', 'なかつし', '33.59833333', '131.1883333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44204, 44, '日田市', 'ひたし', '33.32111111', '130.9413889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44205, 44, '佐伯市', 'さいきし', '32.96027778', '131.8994444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44206, 44, '臼杵市', 'うすきし', '33.12583333', '131.8047222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44207, 44, '津久見市', 'つくみし', '33.0725', '131.8611111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44208, 44, '竹田市', 'たけたし', '32.97305556', '131.3983333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44209, 44, '豊後高田市', 'ぶんごたかだし', '33.55722222', '131.4447222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44210, 44, '杵築市', 'きつきし', '33.41694444', '131.6161111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44211, 44, '宇佐市', 'うさし', '33.53194444', '131.3494444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44212, 44, '豊後大野市', 'ぶんごおおのし', '32.97805556', '131.585');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44213, 44, '由布市', 'ゆふし', '33.18', '131.4266667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44214, 44, '国東市', 'くにさきし', '33.56527778', '131.7316667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44322, 44, '姫島村', 'ひめしまむら', '33.72444444', '131.6452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44341, 44, '日出町', 'ひじまち', '33.36944444', '131.5325');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44461, 44, '九重町', 'ここのえまち', '33.22833333', '131.1888889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(44462, 44, '玖珠町', 'くすまち', '33.28333333', '131.1513889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45201, 45, '宮崎市', 'みやざきし', '31.90777778', '131.4202778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45202, 45, '都城市', 'みやこのじょうし', '31.71972222', '131.0616667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45203, 45, '延岡市', 'のべおかし', '32.58222222', '131.665');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45204, 45, '日南市', 'にちなんし', '31.60194444', '131.3788889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45205, 45, '小林市', 'こばやしし', '31.99666667', '130.9727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45206, 45, '日向市', 'ひゅうがし', '32.42277778', '131.6238889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45207, 45, '串間市', 'くしまし', '31.46472222', '131.2286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45208, 45, '西都市', 'さいとし', '32.10861111', '131.4013889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45209, 45, 'えびの市', 'えびのし', '32.04555556', '130.8111111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45341, 45, '三股町', 'みまたちょう', '31.73083333', '131.125');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45361, 45, '高原町', 'たかはるちょう', '31.92833333', '131.0077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45382, 45, '国富町', 'くにとみちょう', '31.99055556', '131.3236111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45383, 45, '綾町', 'あやちょう', '31.99916667', '131.2530556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45401, 45, '高鍋町', 'たかなべちょう', '32.12833333', '131.5033333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45402, 45, '新富町', 'しんとみちょう', '32.06888889', '131.4877778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45403, 45, '西米良村', 'にしめらそん', '32.22638889', '131.1544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45404, 45, '木城町', 'きじょうちょう', '32.16388889', '131.4733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45405, 45, '川南町', 'かわみなみちょう', '32.19194444', '131.5258333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45406, 45, '都農町', 'つのちょう', '32.25666667', '131.5597222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45421, 45, '門川町', 'かどがわちょう', '32.46972222', '131.6488889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45429, 45, '諸塚村', 'もろつかそん', '32.51222222', '131.3302778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45430, 45, '椎葉村', 'しいばそん', '32.46666667', '131.1575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45431, 45, '美郷町', 'みさとちょう', '32.44027778', '131.4233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45441, 45, '高千穂町', 'たかちほちょう', '32.71166667', '131.3077778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45442, 45, '日之影町', 'ひのかげちょう', '32.65388889', '131.3880556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(45443, 45, '五ヶ瀬町', 'ごかせちょう', '32.68305556', '131.1961111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46201, 46, '鹿児島市', 'かごしまし', '31.59694444', '130.5572222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46203, 46, '鹿屋市', 'かのやし', '31.37833333', '130.8522222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46204, 46, '枕崎市', 'まくらざきし', '31.27277778', '130.2969444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46206, 46, '阿久根市', 'あくねし', '32.01444444', '130.1927778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46208, 46, '出水市', 'いずみし', '32.09055556', '130.3527778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46210, 46, '指宿市', 'いぶすきし', '31.25277778', '130.6330556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46213, 46, '西之表市', 'にしのおもてし', '30.7325', '130.9975');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46214, 46, '垂水市', 'たるみずし', '31.49277778', '130.7011111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46215, 46, '薩摩川内市', 'さつませんだいし', '31.81333333', '130.3041667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46216, 46, '日置市', 'ひおきし', '31.63361111', '130.4022222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46217, 46, '曽於市', 'そおし', '31.65361111', '131.0191667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46218, 46, '霧島市', 'きりしまし', '31.74111111', '130.7630556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46219, 46, 'いちき串木野市', 'いちきくしきのし', '31.71472222', '130.2719444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46220, 46, '南さつま市', 'みなみさつまし', '31.41666667', '130.3233333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46221, 46, '志布志市', 'しぶしし', '31.49527778', '131.0455556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46222, 46, '奄美市', 'あまみし', '28.37722222', '129.4938889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46223, 46, '南九州市', 'みなみきゅうしゅうし', '31.37833333', '130.4416667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46224, 46, '伊佐市', 'いさし', '32.05722222', '130.6130556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46225, 46, '姶良市', 'あいらし', '31.72833333', '130.6277778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46303, 46, '三島村', 'みしまむら', '31.59444444', '130.5608333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46304, 46, '十島村', 'としまむら', '31.59305556', '130.5605556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46392, 46, 'さつま町', 'さつまちょう', '31.90638889', '130.4552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46404, 46, '長島町', 'ながしまちょう', '32.19916667', '130.1769444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46452, 46, '湧水町', 'ゆうすいちょう', '31.95166667', '130.7211111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46468, 46, '大崎町', 'おおさきちょう', '31.42916667', '131.0058333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46482, 46, '東串良町', 'ひがしくしらちょう', '31.38583333', '130.9733333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46490, 46, '錦江町', 'きんこうちょう', '31.24361111', '130.7877778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46491, 46, '南大隅町', 'みなみおおすみちょう', '31.21722222', '130.7683333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46492, 46, '肝付町', 'きもつきちょう', '31.34472222', '130.9452778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46501, 46, '中種子町', 'なかたねちょう', '30.53305556', '130.9586111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46502, 46, '南種子町', 'みなみたねちょう', '30.41361111', '130.9008333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46505, 46, '屋久島町', 'やくしまちょう', '30.37111111', '130.665');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46523, 46, '大和村', 'やまとそん', '28.35805556', '129.3952778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46524, 46, '宇検村', 'うけんそん', '28.28083333', '129.2975');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46525, 46, '瀬戸内町', 'せとうちちょう', '28.14638889', '129.3147222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46527, 46, '龍郷町', 'たつごうちょう', '28.41305556', '129.5894444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46529, 46, '喜界町', 'きかいちょう', '28.31694444', '129.94');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46530, 46, '徳之島町', 'とくのしまちょう', '27.72666667', '129.0186111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46531, 46, '天城町', 'あまぎちょう', '27.80916667', '128.8977778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46532, 46, '伊仙町', 'いせんちょう', '27.67361111', '128.9375');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46533, 46, '和泊町', 'わどまりちょう', '27.39222222', '128.6552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46534, 46, '知名町', 'ちなちょう', '27.33361111', '128.5736111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(46535, 46, '与論町', 'よろんちょう', '27.04861111', '128.4147222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47201, 47, '那覇市', 'なはし', '26.22880945', '127.688855');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47205, 47, '宜野湾市', 'ぎのわんし', '26.28166667', '127.7783333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47207, 47, '石垣市', 'いしがきし', '24.34055556', '124.1555556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47208, 47, '浦添市', 'うらそえし', '26.24583333', '127.7219444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47209, 47, '名護市', 'なごし', '26.59166667', '127.9775');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47210, 47, '糸満市', 'いとまんし', '26.12361111', '127.6658333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47211, 47, '沖縄市', 'おきなわし', '26.33416667', '127.8055556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47212, 47, '豊見城市', 'とみぐすくし', '26.16111111', '127.6688889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47213, 47, 'うるま市', 'うるまし', '26.37916667', '127.8575');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47214, 47, '宮古島市', 'みやこじまし', '24.80555556', '125.2811111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47215, 47, '南城市', 'なんじょうし', '26.14444444', '127.7669444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47301, 47, '国頭村', 'くにがみそん', '26.74583333', '128.1780556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47302, 47, '大宜味村', 'おおぎみそん', '26.70166667', '128.1202778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47303, 47, '東村', 'ひがしそん', '26.63333333', '128.1569444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47306, 47, '今帰仁村', 'なきじんそん', '26.6825', '127.9727778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47308, 47, '本部町', 'もとぶちょう', '26.65805556', '127.8980556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47311, 47, '恩納村', 'おんなそん', '26.4975', '127.8536111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47313, 47, '宜野座村', 'ぎのざそん', '26.48166667', '127.9755556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47314, 47, '金武町', 'きんちょう', '26.45611111', '127.9261111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47315, 47, '伊江村', 'いえそん', '26.71333333', '127.8072222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47324, 47, '読谷村', 'よみたんそん', '26.39611111', '127.7444444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47325, 47, '嘉手納町', 'かでなちょう', '26.36166667', '127.7552778');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47326, 47, '北谷町', 'ちゃたんちょう', '26.32', '127.7638889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47327, 47, '北中城村', 'きたなかぐすくそん', '26.30111111', '127.7930556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47328, 47, '中城村', 'なかぐすくそん', '26.26722222', '127.7911111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47329, 47, '西原町', 'にしはらちょう', '26.22611111', '127.7655556');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47348, 47, '与那原町', 'よなばるちょう', '26.19944444', '127.7547222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47350, 47, '南風原町', 'はえばるちょう', '26.19111111', '127.7286111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47353, 47, '渡嘉敷村', 'とかしきそん', '26.1975', '127.3644444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47354, 47, '座間味村', 'ざまみそん', '26.22888889', '127.3033333');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47355, 47, '粟国村', 'あぐにそん', '26.5825', '127.2272222');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47356, 47, '渡名喜村', 'となきそん', '26.37222222', '127.1411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47357, 47, '南大東村', 'みなみだいとうそん', '25.82888889', '131.2319444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47358, 47, '北大東村', 'きただいとうそん', '25.94583333', '131.2988889');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47359, 47, '伊平屋村', 'いへやそん', '27.03916667', '127.9686111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47360, 47, '伊是名村', 'いぜなそん', '26.92833333', '127.9411111');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47361, 47, '久米島町', 'くめじまちょう', '26.34083333', '126.805');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47362, 47, '八重瀬町', 'やえせちょう', '26.12166667', '127.7425');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47375, 47, '多良間村', 'たらまそん', '24.66944444', '124.7016667');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47381, 47, '竹富町', 'たけとみちょう', '24.33972222', '124.1544444');
INSERT INTO public.city
(id, prefecture_id, "name", yomi, latitude, longitude)
VALUES(47382, 47, '与那国町', 'よなぐにちょう', '24.46805556', '123.0047222');
