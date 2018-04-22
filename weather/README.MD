# 获取天气接口

## `get` https://www.baidu.com/home/other/data/weatherInfo?city=上海
* city : 城市中文名字，不传就是自动获取

```json
{
	"errNo": "0",
	"data": {
		"weather": {
			"setting": "自动",
			"content": {
				"week": "周日 04月22日 ",
				"city": "郑州",
				"today": {
					"time": "周日 04月22日 (实时：17℃)",
					"date": "04月22日",
					"img": ["http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/bigicon\/5.png", "http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/bigicon\/5.png"],
					"condition": "多云",
					"wind": "东北风4-5级",
					"temp": "17℃",
					"link": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml",
					"imgs": {
						"1": "a1",
						"0": "a1"
					},
					"pm25": "77",
					"pollution": "10",
					"pm25url": "\/\/www.baidu.com\/s?wd=éå·ç©ºæ°è´¨éææ°&tn=baidutop10&rsv_idx=2",
					"pmdate": "2018-04-22"
				},
				"tomorrow": {
					"time": "周一",
					"date": "04月23日",
					"img": ["http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/icon\/5.png", ""],
					"condition": "多云",
					"wind": "北风3-4级",
					"temp": "20 ~ 11℃",
					"link": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml",
					"imgs": {
						"1": "a1",
						"0": "a1"
					},
					"pm25": "77",
					"pollution": "10",
					"pm25url": "\/\/www.baidu.com\/s?wd=éå·ç©ºæ°è´¨éææ°&tn=baidutop10&rsv_idx=2",
					"pmdate": "2018-04-22"
				},
				"thirdday": {
					"time": "周二",
					"date": "04月24日",
					"img": ["http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/icon\/5.png", ""],
					"condition": "多云",
					"wind": "东北风微风",
					"temp": "21 ~ 13℃",
					"link": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml",
					"imgs": {
						"1": "a1",
						"0": "a1"
					},
					"pm25": "\/\/www.baidu.com\/s?wd=éå·ç©ºæ°è´¨éææ°&tn=baidutop10&rsv_idx=2",
					"pollution": "10",
					"pm25url": "",
					"pmdate": "2018-04-22"
				},
				"fourthday": {
					"time": "周三",
					"date": "04月25日",
					"img": ["http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/icon\/8.png", ""],
					"condition": "小雨转多云",
					"wind": "西南风微风",
					"temp": "21 ~ 14℃",
					"link": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml",
					"imgs": {
						"1": "a7",
						"0": "a7"
					}
				},
				"fifthday": {
					"time": "周四",
					"date": "04月26日",
					"img": ["http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/icon\/5.png", ""],
					"condition": "多云转晴",
					"wind": "西南风微风",
					"temp": "26 ~ 13℃",
					"link": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml",
					"imgs": {
						"1": "a1",
						"0": "a1"
					}
				},
				"linkseven": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml#7d",
				"source": {
					"name": "中国气象频道",
					"url": "http:\/\/www.mywtv.cn\/"
				},
				"cityname": "郑州",
				"calendar": {
					"time": "1524375006078",
					"lunar": "三月初七",
					"festival": false,
					"weatherSourceUrl": "http:\/\/www.weather.com.cn\/weather\/101180101.shtml#7d"
				},
				"currenttemp": "17℃",
				"warning": {
					"title": "河南省郑州市发布大风蓝色预警",
					"color": "#3366ff",
					"imgurl": "http:\/\/s1.bdstatic.com\/r\/www\/aladdin\/img\/new_weath\/warnicon\/5.png",
					"url": "http:\/\/www.weather.com.cn\/alarm\/newalarmcontent.shtml?file=1011801-20180421225500-0501.html"
				},
				"pslink": "\/\/www.baidu.com\/s?tn=baidutop10&rsv_idx=2&wd=éå·å¤©æ°é¢æ¥",
				"weatherType": "aladdin",
				"isauto": true,
				"ipcity": "郑州",
				"province": "河南"
			}
		}
	}
}
```



