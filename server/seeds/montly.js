/**
 * Created by Carleton on 7/31/2015.
 */
Meteor.startup(function () {

    if (Monthly.find({}).count() === 0) {
        // want to insert example daily data.
        var example_data = [
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 4089605.3500000015
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 3657066.85288842
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 4958198.373535164
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3474925.5844011605
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 4339282.368237823
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2426939.791739039
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 1702669.1319852248
            },
            {
                "tower": "ilima",
                "lounge": "a",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 111902.1363491863
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2821967.7117599174
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2731030.2025594786
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3502728.688188046
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3045414.136552967
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3684694.299454443
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2048054.2598742247
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 404483.2661144808
            },
            {
                "tower": "ilima",
                "lounge": "b",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 24889.79093360901
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2321331.613589853
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2200727.8307318613
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 2666063.016294427
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2430388.0514655113
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 2925616.410235703
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1631126.2605568022
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 374350.14834330976
            },
            {
                "tower": "ilima",
                "lounge": "c",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 25669.796057254076
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 3015761.5826666728
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2817727.857333325
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3546116.9599921256
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3127878.9950195476
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3668033.864227645
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1812311.1242780238
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 610823.5471375436
            },
            {
                "tower": "ilima",
                "lounge": "d",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 57583.61278852075
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 877910.0
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 828108.8206666633
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 1053222.7756361067
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 888776.8314616382
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 966235.0688256174
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 493248.0729942769
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 360690.25231570005
            },
            {
                "tower": "ilima",
                "lounge": "e",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 31254.260618895292
            },
            {
                "tower": "ilima",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 1.3126576258016445E7
            },
            {
                "tower": "ilima",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 1.2234661564179748E7
            },
            {
                "tower": "ilima",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 1.572632981364587E7
            },
            {
                "tower": "ilima",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 1.2967383598900825E7
            },
            {
                "tower": "ilima",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 1.5583862010981232E7
            },
            {
                "tower": "ilima",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 8411679.509442367
            },
            {
                "tower": "ilima",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 3453016.345896259
            },
            {
                "tower": "ilima",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 251299.59674746543
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2336495.304000005
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2201628.069397323
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 2775859.50781969
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2414230.3940293863
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 2837415.7820116654
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1719007.8495419323
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 807619.381989643
            },
            {
                "tower": "lehua",
                "lounge": "a",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 80824.02110484987
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2919421.0388858914
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2729960.6659999937
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3633278.9907887205
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3071423.555797912
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3647793.2069512457
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2058248.597096309
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 666918.2783951238
            },
            {
                "tower": "lehua",
                "lounge": "b",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 61166.67669110745
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2492531.766666673
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2508208.5586666614
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3529641.6599235535
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2981319.332235202
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3611707.828013137
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1988578.570635289
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 454933.0349183753
            },
            {
                "tower": "lehua",
                "lounge": "c",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 68319.67644558102
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 3032974.659333341
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2903576.4860795066
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3325826.6129940823
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2657339.714749895
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3297044.5362988785
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1993978.6528509408
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 585177.4017785415
            },
            {
                "tower": "lehua",
                "lounge": "d",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 47945.28381919116
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2333840.3840000033
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2319979.232666664
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 2725843.4417023286
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2563833.889562212
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3698488.3481196016
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1993921.0727386698
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 502709.44200353324
            },
            {
                "tower": "lehua",
                "lounge": "e",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 39712.3735415414
            },
            {
                "tower": "lehua",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 1.3115263152885914E7
            },
            {
                "tower": "lehua",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 1.2663353012810148E7
            },
            {
                "tower": "lehua",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 1.5990450213228375E7
            },
            {
                "tower": "lehua",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 1.3688146886374608E7
            },
            {
                "tower": "lehua",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 1.709244970139453E7
            },
            {
                "tower": "lehua",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 9753734.742863141
            },
            {
                "tower": "lehua",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 3017357.539085217
            },
            {
                "tower": "lehua",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 297968.0316022709
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 3167246.326000005
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2827755.940666672
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3377671.7661804482
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3155320.545641858
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3667965.3064353094
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1869413.6531795561
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 281277.695364058
            },
            {
                "tower": "lokelani",
                "lounge": "a",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 20129.878233522177
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2683865.426666662
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2554268.5606666654
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3322415.9049684145
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2917754.4801197797
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3407273.796987273
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1934961.6830950268
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 306002.9863306731
            },
            {
                "tower": "lokelani",
                "lounge": "b",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 20194.510510955006
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 3009530.9133333266
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2976458.802000001
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3456335.229139164
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3682029.8916250654
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 4043807.120678503
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2173333.3395467624
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 379887.45244657993
            },
            {
                "tower": "lokelani",
                "lounge": "c",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 32029.82141955197
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2806781.052000001
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2634390.4146666676
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 2668116.508735176
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2425769.1591792777
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 2747244.117274251
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 1464616.0579632968
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 317480.07751466334
            },
            {
                "tower": "lokelani",
                "lounge": "d",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 21709.857523307204
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2954090.4173333347
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2942978.0639999956
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3941458.0375584774
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 3271683.2600890547
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3978402.652402431
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2168715.187226031
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 302837.249161005
            },
            {
                "tower": "lokelani",
                "lounge": "e",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 19649.87980081141
            },
            {
                "tower": "lokelani",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 1.462151413533333E7
            },
            {
                "tower": "lokelani",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 1.3935851782000002E7
            },
            {
                "tower": "lokelani",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 1.676599744658168E7
            },
            {
                "tower": "lokelani",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 1.5452557336655036E7
            },
            {
                "tower": "lokelani",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 1.7844692993777767E7
            },
            {
                "tower": "lokelani",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 9611039.921010673
            },
            {
                "tower": "lokelani",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 1587485.4608169794
            },
            {
                "tower": "lokelani",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 113713.94748814777
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "a",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "b",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "c",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "d",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 0.0
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2766770.8375889584
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2685600.6220000014
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3271296.129143186
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2880203.4505890235
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3298351.5414444357
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2339895.0009785965
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 645807.8636880293
            },
            {
                "tower": "mokihana",
                "lounge": "e",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 45916.10625299811
            },
            {
                "tower": "mokihana",
                "date": "2014-12-31T13:17:00.000Z",
                "value": 2766770.8375889584
            },
            {
                "tower": "mokihana",
                "date": "2015-01-30T13:17:00.000Z",
                "value": 2685600.6220000014
            },
            {
                "tower": "mokihana",
                "date": "2015-03-01T13:17:00.000Z",
                "value": 3271296.129143186
            },
            {
                "tower": "mokihana",
                "date": "2015-03-31T13:17:00.000Z",
                "value": 2880203.4505890235
            },
            {
                "tower": "mokihana",
                "date": "2015-04-30T13:17:00.000Z",
                "value": 3298351.5414444357
            },
            {
                "tower": "mokihana",
                "date": "2015-05-30T13:17:00.000Z",
                "value": 2339895.0009785965
            },
            {
                "tower": "mokihana",
                "date": "2015-06-29T13:17:00.000Z",
                "value": 645807.8636880293
            },
            {
                "tower": "mokihana",
                "date": "2015-07-01T13:17:00.000Z",
                "value": 45916.10625299811
            }
        ];
        var i;
        for (i = 0; i < example_data.length; i++) {
            var data = example_data[i];
            data.date = new Date(data.date);
            Monthly.insert(data);
        }
    }
});


