var test = require('tape');
var splines = require('./splines.js');

test("B-spline", function(t) {
    var i, err, spl = [splines.bspline(0),splines.bspline(1),splines.bspline(2),splines.bspline(3),splines.bspline(4),splines.bspline(5)],
        points = [[2,1.287581737221612,0.02256075918089413],[4,0.8780620293386034,0.2571830932370515],[5,3.387201406888996,0],[2,1.253114741416352,0.03047616545295728],[1,1.1448882255999,0],[4,0.3809852595573635,0.5135068421209514],[1,-1.156898140578337,0],[3,-0.7505087852586312,0.3147703087643476],[0,0.3973304904297006,1.],[2,0.928101997779079,0.1635336624721404],[3,-0.6510896362798901,0.3807531674593758],[4,-2.520921732486933,0],[1,-0.8139208804067546,0.1860791195932454],[3,-1.897096078356973,0.0001816119942733935],[4,2.875518653302538,0],[3,1.631529044487906,0.008337935501411189],[4,-0.4935735361715317,0.4615361081099736],[5,-2.370597065954353,0.0008231188917323187],[3,0.4165899648797955,0.5292684785626865],[3,-1.929981230884973,0.00005721266332937391],[3,-2.304809894116562,0],[0,0.03888759567323063,1.],[3,-0.2926807481379956,0.5935404584347384],[0,-0.06473565153288297,1.],[3,2.09164773087209,0],[3,-1.184457103135569,0.0904043188002201],[3,1.51022316700373,0.01958138766787676],[1,-0.05058938698017745,0.949410613019823],[4,0.922474326988943,0.2348681459593239],[1,-1.201785393898031,0],[1,-0.03387375696217343,0.966126243037827],[5,1.020706879539606,0.2081117119507471],[0,0.8997381692554631,0],[4,0.1337086065346562,0.5878644943146075],[0,-0.5484468399206217,0],[4,0.5517934791328036,0.4318342229617889],[5,-1.900568465162663,0.0133857877986034],[1,0.06007129458833704,0.939928705411663],[2,0.698493755960846,0.321206129616876],[1,0.07135224767835391,0.928647752321646],[0,0.1269886643938056,1.],[2,-1.000098321556425,0.124950844055352],[5,-1.082461371240074,0.1835269819619464],[2,0.4361688917956679,0.559756697829739],[0,-0.979314136162704,0],[5,0.7925067046740364,0.3085320173126825],[2,-0.3294019765573859,0.6414943378400874],[2,-1.460429969380505,0.0007828936616138789],[4,1.733503923500513,0.01438230528034526],[1,1.397934736374405,0],[4,0.8673606240486249,0.2626675029183416],[5,-0.2311965718157869,0.5239333017940127],[2,0.6754026960526041,0.339980356838657],[4,0.7591286378352895,0.319930573502946],[0,-0.1876739539258989,1.],[3,-1.384702580171074,0.03882433551278813],[5,1.020626965883211,0.2081444421852539],[5,0.7087975339435799,0.3469945911048211],[2,-0.08700701610286909,0.7424297791488751],[2,-0.1379848864920454,0.7309601710997773],[1,-1.327871700541668,0],[3,2.008236334460263,0],[2,0.8501674962991936,0.2111411414330293],[5,0.95319963866731,0.2365139977507707],[0,-0.4902624918785028,1.],[5,-3.237757303617262,0],[5,-0.585674925245135,0.4021647718205781],[1,0.2459342527715214,0.7540657472284786],[5,-0.901524470157271,0.2591403142013312],[4,-1.692134947514186,0.01774778028961608],[5,3.275898517791243,0],[0,-0.6387426188252214,0],[0,0.7288417329684074,0],[4,-2.410366258440014,2.689520507431597e-6],[4,-2.171730909207572,0.0004838477518225911],[2,0.634966468653575,0.3741415051768332],[3,0.139090405036576,0.6486659571714501],[0,0.982605204420511,0],[2,1.825708706177459,0],[2,-0.1904378360925483,0.7137334305843877],[2,-1.51614793555416,0],[2,-0.3565885078703817,0.6228446360547748],[5,-1.104930361176397,0.1749536254388078],[2,-0.271385521082224,0.6763498989469297],[1,-1.290204511846203,0],[3,2.081111425690501,0],[3,-1.570075916117816,0.01324414946060193],[2,0.2858595322584403,0.6682843278169857],[2,-0.2013092790794886,0.7094745741564966],[2,1.814072684024955,0],[0,0.3713730967523374,1.],[2,-1.280631238274739,0.02406132681043714],[1,0.90981408390512,0.0901859160948801],[3,1.604706919734439,0.01029452672621447],[2,1.497925652033096,2.151459743898642e-6],[4,2.734683194645854,0],[4,1.909659688506232,0.005060559304787542],[2,0.90624254723759,0.1762739563554527],[3,-0.1383228800053771,0.6488567285208087],[2,0.3664998017940206,0.6156778952849436],[0,0.00960612851051224,1.],[0,0.6357339606924799,0],[1,-0.3568573060910765,0.6431426939089235],[1,0.7313872932383858,0.2686127067616142],[3,-0.260588273313217,0.607608204459595],[4,0.7474662719768133,0.326242623486473],[0,0.953640213100295,0],[4,0.935310946923545,0.2285639487128781],[4,-0.1603625740570203,0.5830510665184926],[2,1.494680096005196,0.00001415068925696329],[2,-0.3790188112098631,0.6063447407490621],[0,-0.08370498607384791,1.],[2,-1.630678509516382,0],[4,-2.522872112520682,0],[5,-2.007013105129336,0.008045190613053592],[1,1.462144492134924,0],[1,0.690530140955893,0.309469859044107],[0,-0.8627859690354041,0],[5,-3.048306220172559,0],[5,-2.449572777596078,0.0004210350750201752],[3,2.268285754435445,0],[0,0.6706093582305717,0],[4,-1.389899093110668,0.06324532329156497],[5,0.4492016161249859,0.4577638156351431],[1,-1.439423593198942,0],[2,1.958555639243455,0],[5,-3.315705872661175,0],[1,-0.4782710584704943,0.5217289415295057],[2,0.915394760936638,0.1708816427701652],[4,2.874629430084546,0],[3,-2.452655976252771,0],[5,0.1352387814394049,0.5409350928479973],[1,0.3571718972391229,0.6428281027608771],[1,-0.5748099695893074,0.4251900304106926],[0,0.4447007206060154,1.],[0,0.946213889528287,0],[5,3.0560453374816,0],[4,-0.2567687338997842,0.558838666388516],[2,1.938985208590795,0],[1,0.8037285707447681,0.1962714292552319],[1,-0.6985884600041394,0.3014115399958606],[5,0.02174614867038938,0.5497636080111617],[0,-0.1816476626955459,1.],[1,-1.192843292294776,0],[3,-1.075515458033567,0.1316884576387107],[0,-0.3455320725970967,1.],[3,-1.757225437644602,0.00238483473924141],[3,-2.497256703363152,0],[5,-2.585728803516178,0.0001016816177483891],[1,-0.748139624852967,0.251860375147033],[5,-2.519443206132982,0.0002135710394018789],[3,-2.120271770764621,0],[2,-1.200674241574965,0.04479795482836129],[3,1.303402701999222,0.05633705054387401],[5,3.096812416510637,0],[3,1.5859644307078,0.01182937247910157],[2,-0.6545810833853407,0.3573665722849521],[4,1.583885174519272,0.02934866856791972],[2,-0.408092853034268,0.5834602233023513],[3,1.600913361878972,0.01059376443534102],[0,0.3163688715981872,1.],[2,0.942191663060632,0.1555750703795315],[1,1.404462551324848,0],[3,-1.09539248946051,0.1233756111897684],[4,2.52621379665795,0],[0,0.7634459559021733,0],[2,-0.5095101162311693,0.4905351049241959],[3,-0.2965457872081056,0.5917662926354726],[2,0.951935462474767,0.1501873686463739],[4,0.7231539140283014,0.3394499300826339],[3,1.987421251159865,3.31711926484647e-7],[5,0.03192965806182979,0.549490505549047],[4,1.914418855717006,0.004899334528284306],[3,-0.6510998493308107,0.3807463624735269],[5,0.8298074746274142,0.2914582490136966],[2,1.355049397582216,0.01050533857063921],[5,2.017006233504533,0.007648434874904317],[1,-1.328872974863031,0],[5,-1.37745024775097,0.08903931543933768],[0,0.6338954867687954,0],[2,0.589797810106222,0.4142340132437145],[5,0.584259435298204,0.4027785102770264],[3,-2.011555171471238,0],[5,-0.8218904854011357,0.2950716481933225],[0,0.6571416690061325,0],[0,0.04207297024294032,1.],[5,1.393797825761204,0.08499497338764027],[2,1.820640076438052,0],[5,2.935081162323152,9.60887251572397e-9],[4,2.502503632531458,0],[5,0.2563467820130172,0.5181304871258504],[2,1.690941680662761,0],[4,-2.620564467469577,0],[0,-0.6170551497579528,0],[5,-0.945674467163244,0.2397660488794813],[5,1.388344453669492,0.0863301847948817],[1,-0.2882468353440539,0.7117531646559461],[0,-0.1085533072888012,1.],[1,-0.06797624860400786,0.932023751395992],[0,-0.4447009429548721,1.],[1,1.046117692364013,0],[5,-3.108237529400308,0],[2,-0.8794078970226167,0.1925672791389456],[0,-0.8586062604560212,0],[0,0.0929682399234402,1.],[5,-3.350371308530263,0],[2,-1.667344620229363,0],[1,-0.1159061162265418,0.8840938837734582],[3,2.252512464686268,0],[2,1.838117331305868,0],[2,0.3328503980104323,0.6392106125442968],[4,-1.964840743424062,0.003417597594457576],[4,2.278699449460172,0.0000999352574599268],[5,-0.4270090985691797,0.4659602357790797],[5,-2.711744734791526,0.00001658459986472751],[2,-0.2170553589200539,0.7028869711640866],[0,-0.3183304079957745,1.],[0,-0.6147614495142126,0],[4,0.824340157623451,0.2850794656307021],[5,1.614137659153269,0.04217325102716121],[2,-0.8040695409722796,0.2421596019012668],[5,-0.3111272979394788,0.5036995259326477],[4,0.1421957559271045,0.5864232710957338],[0,0.2810838681662085,1.],[2,0.924439130953322,0.1656351569888834],[4,-1.338129117922798,0.07578816196597452],[1,-1.477796321988416,0],[4,1.480696725079468,0.04497820890479441],[2,-0.2440405772645304,0.6904441966483948],[0,-0.03427846907290588,1.],[5,-2.892469279341688,1.19806818624452e-7],[2,-1.472888846947844,0.0003675073099087003],[3,2.185884058089351,0],[3,-0.8273722976883202,0.2653084989291383],[2,-0.7954915514458198,0.248166077042109],[5,-3.093142706704657,0],[4,-0.7368598885998621,0.3319973821793763],[4,-0.1046610777133687,0.5921421172976442],[1,-0.2265536000588184,0.7734463999411816],[1,1.187705027798952,0],[3,-0.2598159461174565,0.6079316909545246],[5,-2.614823325771914,0.00007065105458460029],[0,-0.8541460187889576,0],[5,-0.0979846464206016,0.5452217966121977],[0,-0.902472745483196,0],[4,0.03479870492265213,0.5982018562680432],[1,0.4719261424034513,0.5280738575965487],[1,-0.6477089319144607,0.3522910680855393],[5,2.681349667390895,0.00002737730123836411],[3,-0.6003715372447482,0.4144214383067839],[0,-0.4835556103559071,1.],[1,1.449246189892674,0],[2,-0.7703783693769921,0.2661738619364885],[3,-1.001694526933774,0.1658208380995941],[5,-1.492744213555756,0.06314743589835911],[1,-1.19855685279325,0],[2,-0.4139301138977007,0.5786618608086365],[3,1.38459519220082,0.03884466711580473],[5,3.168107474506028,0],[0,-0.991126654867879,0],[2,-0.1452216528635466,0.7289106715395796],[1,-0.7487219554260061,0.2512780445739939],[4,-0.2913916816243782,0.5476925275886532],[0,-0.29827686677781,1.],[5,3.38474907459915,0],[3,1.634178701996252,0.008159352740739764],[3,0.923900356490178,0.2073917138489883],[4,-1.473679874210278,0.046229500443714],[0,-0.8853700868182823,0],[5,-1.482598854698262,0.06518397218019961],[3,0.859904517606993,0.2451529708592988],[5,2.524142052042379,0.0002033318402486529],[0,-0.2003547070124285,1.],[3,-1.672165282389966,0.005872372275789114],[2,0.8387382472763019,0.2186335528076087],[0,-0.03699509728755146,1.],[1,0.8797340336823367,0.1202659663176633],[1,-1.071278980044544,0],[5,2.54068303449387,0.0001703653182431147],[4,-2.109622881376071,0.000967667544619289],[5,-3.166067180449848,0],[4,2.319256577463263,0.00004446709572886526],[5,-2.881100324659866,1.980259465072504e-7],[2,-0.07464492533409839,0.7444281351218669],[4,-0.3555190986210155,0.5239560399385728],[4,1.5062114218865,0.04064103524680272],[2,-1.111203992196793,0.07558116784185574],[1,-0.342423421831811,0.657576578168189],[2,-1.867662634499796,0],[3,0.2670730746499039,0.6048635372306159],[5,2.891025680940335,1.280676893024228e-7],[1,-0.4442015304263234,0.5557984695736766],[0,-0.911859910372806,0],[0,0.6419842331564589,0],[1,-0.520209547077793,0.479790452922207],[5,3.096056306349776,0],[1,-0.0424118813365959,0.957588118663404],[4,-1.496453008639332,0.04226098459152904],[4,-1.220861097204894,0.1102825814444244],[3,-1.358082939730993,0.04408445782242098],[1,-0.1861648390835018,0.8138351609164982],[0,0.5158542093830953,0],[1,-1.194289990446564,0],[4,2.549342196755272,0],[4,0.5141209904929158,0.451224388746369],[3,-1.587490459933368,0.01169905385725295],[0,-0.06017593574587465,1.],[1,0.504992832936064,0.495007167063936],[5,-2.201230637702834,0.002709728301231347],[0,-0.4114597075861899,1.],[3,-1.322972558889698,0.05172107761655402],[4,-2.416357701818883,2.03935384829434e-6],[4,0.6831455694836865,0.3612590211584507],[2,-0.4843480809623726,0.515406936468067],[5,1.97884467721569,0.00925289792672579],[0,0.4578297646850307,1.],[4,2.205215511903536,0.0003146351689595091],[5,3.267035067106409,0],[3,0.2703373749486804,0.6034628084402135],[1,0.6485357715127065,0.3514642284872935],[0,0.3323396625287214,1.],[0,-0.8094905387201767,0],[3,-1.087529483538452,0.1266208635911556],[0,-0.6790944593176764,0],[5,-1.668990581832869,0.03461294496753556],[0,-0.3442022320367872,1.],[5,-2.65458943375089,0.00004097291354748672],[4,-0.546171109499364,0.4347632914616373],[4,1.348132307843152,0.07323901546917295],[4,1.451344705802711,0.05038597998330872],[5,0.5397844977336117,0.4217213282867609],[4,1.965656013424851,0.003396819448408066],[5,1.901352881251047,0.01333812095241463],[1,1.494999815948421,0],[3,-0.003061085425859478,0.6666573107642409],[5,0.0957931949234132,0.5454322109996706],[4,0.7516863397210032,0.3239565369821337],[1,0.1596559559597062,0.8403440440402938],[4,-1.120046890872082,0.1467517127152424],[2,1.90370724627917,0],[0,-0.4165319361138256,1.],[0,-0.614169265614871,0],[1,-1.344945804518614,0],[3,0.30406677508934,0.5882665536168331],[0,0.3757404426602289,1.],[4,-1.672278500654058,0.01955805672318829],[4,0.05402713140375237,0.5971361315429496],[3,-2.390211571096393,0],[5,-0.2492709672013762,0.5198170130162576],[0,0.560585966359918,0],[2,-1.449826493299702,0.001258690387302411],[5,1.551737966196286,0.05219014402313081],[5,-1.094341342991801,0.1789682083177612],[3,1.280856576617984,0.06198623937633115],[3,2.25710648068234,0],[1,1.306221858669637,0],[0,-0.8215165996012272,0],[0,-0.487803978183543,1.],[4,-1.871757643735978,0.006490790793316066],[1,0.8700675102064326,0.1299324897935674],[4,2.913557551323866,0],[4,0.944918837906674,0.2238912966652484],[2,-1.55442952488145,0],[3,1.071722327531813,0.1333160579889841],[1,0.4338052468098634,0.5661947531901366],[0,0.2712867174159586,1.],[1,1.334552705761791,0],[0,0.06385145726288854,1.],[1,-0.3547446888358881,0.6452553111641119],[2,0.1526460378539793,0.7266991871274815],[4,2.952906953907385,0],[3,1.209417268786049,0.08235514210734893],[1,0.2862448437798439,0.7137551562201561],[5,-2.584568867976249,0.0001031131250387263],[4,2.241145036114847,0.0001870745669445568],[3,-0.961669543285558,0.1865383489680762],[3,-1.292262261830773,0.059083445138392],[5,3.160797067339257,0],[0,-0.6835391920684586,0],[2,0.979740842999856,0.1353347952212501],[3,2.090356850084216,0],[5,-2.583704437894568,0.0001041903890386564],[3,0.04976013860107709,0.6642522001009341],[0,-0.956048225573523,0],[1,0.8796464060739779,0.1203535939260221],[4,2.756395767260749,0],[1,0.7959525434467738,0.2040474565532262],[3,-0.8959840596174762,0.2235216041283519],[2,-0.06732662323741323,0.7454671258034474],[4,-1.135814285928955,0.1406406536723728],[1,-0.3049013438769548,0.6950986561230452],[1,-1.065441627675637,0],[4,-2.16250883108909,0.0005405531606431375],[5,-0.2338164410210757,0.5233539053526261],[0,0.6634980620791051,0],[4,0.02365203559303586,0.5986087748283694],[3,0.5569891587441644,0.4428290450731601],[3,1.416709828132984,0.03307521882780904],[3,0.2365090831282635,0.6173448709159644],[5,-1.90114475604657,0.01335075495051269],[3,0.4900402929058112,0.4853661906788],[1,-0.417159816742438,0.582840183257562],[2,-0.2404312097922627,0.6921928333578289],[1,1.345674398304433,0],[1,1.400434892624469,0],[2,1.96250934231771,0],[4,1.883253347535781,0.006028592959569657],[3,-0.8898004285209771,0.2271692963851917],[4,-1.862324795326273,0.006889486908521217],[4,1.620653335339079,0.02491318430666577],[5,1.85379641527294,0.01648312568726447],[2,0.8889954438435073,0.1866632838219963],[1,-0.7120494831418609,0.2879505168581391],[5,-0.8749738316085633,0.2710022569164965],[2,0.7582246178012344,0.2751153588180624],[3,1.024248182676482,0.1548341862916876],[1,1.423543970527725,0],[2,0.6939968661769438,0.3248205258662937],[3,-1.889170599971816,0.0002268891333375429],[1,-0.7411802873369604,0.2588197126630396],[2,-0.8473696187563498,0.2129632072611161],[1,0.5859743501396411,0.4140256498603589],[2,-0.2681575481998797,0.6780915293434292],[1,-1.484723331844147,0],[3,-2.329759269849934,0],[5,-0.3077392475953635,0.5046604605087011],[3,-2.283104889928569,0],[0,0.1743468021527459,1.],[2,1.562806884616611,0],[3,2.168972186612896,0],[1,-0.3516311889705108,0.6483688110294892],[2,-1.123149717556,0.07100806768906124],[4,0.5988706478912817,0.4069214820238047],[0,-0.4020216047584451,1.],[2,-1.876164780772951,0],[1,1.268029563036171,0],[0,-0.3690897084619134,1.],[0,-0.5323467280932013,0],[2,0.08723873352798606,0.742389403372433],[4,-2.934214069480481,0],[3,-2.164375501166182,0],[4,-2.356951333680287,0.00001744713055111607],[0,0.7475732018407606,0],[5,-0.8210197654941565,0.2954694552147609],[4,0.403005495955024,0.5040444702695216],[4,-2.46277112602694,8.004023612336813e-8],[3,-0.530362426802784,0.4599736758854682],[3,0.8894165404797383,0.2273966011268004],[1,0.6048312755690033,0.3951687244309967],[3,0.1240781802173474,0.6522263881462492],[5,-2.609795501612105,0.00007538416223102932],[4,-1.741330782410212,0.0138037985081615],[0,0.1322218316729771,1.],[5,2.135157358080817,0.004031848714751826],[0,-0.2072411637604707,1.],[2,-1.492871000635734,0.00002541131596785115],[1,0.6855232537171609,0.3144767462828391],[5,-0.5704418600122181,0.4087364041463174],[2,0.2639486944593381,0.680331086693211],[5,-0.6002622594065889,0.395805120756126],[3,2.337660379141887,0],[0,0.6413393705746189,0],[2,-1.788252836539998,0],[2,-1.412757309694194,0.003805643505897398],[3,1.587438646222895,0.01170346282824023],[3,-2.212427351637161,0],[3,1.940155370294371,0.00003572105704287912],[2,1.585923922210121,0],[0,0.0954306675562937,1.],[0,0.969515624348337,0],[4,0.6234242496036071,0.3937142398207453],[3,-1.10371229616429,0.1200027130411138],[3,-1.156311502547985,0.1000910243703975],[2,0.5891027961717459,0.414866857971066],[1,0.7187435347162001,0.2812564652837999],[2,-0.7686882466309291,0.2674084403078724],[5,1.954384109935102,0.01041547821364416],[1,-1.025943834206054,0],[0,0.1223113606151376,1.],[5,1.113987532598812,0.1715568954709773],[5,0.8517041795820213,0.2815036932057554],[1,1.047663791032783,0],[4,2.708547223649685,0],[2,0.313864168159526,0.6514892839455288],[1,-0.6779626371160212,0.3220373628839788],[2,0.926150908732487,0.1646513897742751],[4,-0.2066063994508198,0.5727349836588215],[1,-1.080307142390357,0],[5,-3.026317417827576,0],[4,-0.7826223275830189,0.3072772613863338],[1,-0.0932444975073699,0.90675550249263],[0,0.3182470311439713,1.],[2,1.841963178807501,0],[1,-0.3245333280492106,0.6754666719507894],[1,-0.092139829996323,0.907860170003677],[0,0.5664623119462555,0],[3,-2.480332949712838,0],[3,-2.324436540412384,0],[5,-0.7987334829585744,0.30567429540988],[2,-1.048625392494193,0.1018695181505106],[5,-1.200138173630306,0.1410337162251285],[2,-0.995065982209611,0.1274791811609725],[1,0.2691780064514,0.7308219935486],[4,-2.829376755973623,0],[3,0.1394863173340555,0.6485671870177735],[2,1.665857571464035,0],[1,-0.6728783192102976,0.3271216807897024],[2,0.6027967373376493,0.4024868472659836],[3,-0.1334474694994969,0.6500466709732867],[1,1.015173334932517,0],[1,-1.088070913868818,0],[5,-3.341416150712341,0],[2,0.8514004422343717,0.2103406931668843],[0,0.977874766634409,0],[1,0.6811423644727668,0.3188576355272332],[1,-0.02613383808969871,0.973866161910301],[1,1.00769989611858,0],[2,-0.943416668157645,0.1548925026423686],[1,-1.478928522715877,0],[1,0.879145214102699,0.120854785897301],[0,-0.04887035411890261,1.],[0,0.02682540772395114,1.],[2,1.493369905242846,0.00002197907824441778],[4,1.045731096318438,0.1774946250273749],[4,0.8446743830947798,0.274417509676313],[1,-0.3982571956190297,0.6017428043809703],[1,-0.4322599953389659,0.5677400046610341],[3,0.8095594123690364,0.276567356004306],[0,0.921526398786992,0],[3,-0.6559260957655066,0.3775301314557483],[2,0.4851731055762896,0.5146070576254586],[3,1.014546737188208,0.1594985888207069],[4,0.5982358431988204,0.4072613219315886],[1,-1.078337485537969,0],[1,-1.366963443363031,0],[2,-0.938467902040621,0.1576591485193308],[4,2.185263929667792,0.0004088601942677701],[2,-0.5604315079595477,0.4413944756175848],[3,-0.5323435425469991,0.4587073437553258],[5,-2.996184706713705,6.736873546719805e-15],[2,-0.2590042925295384,0.6829167764512733],[0,-0.7748480788046348,0],[5,2.633825490827997,0.00005486044100394934],[4,-0.3642219645184399,0.5204468210100823],[2,-0.7896903518408074,0.252269898134018],[5,-0.266828841869571,0.5155557450008479],[4,0.3811425422049841,0.5134406268025666],[5,-0.8083062358946562,0.3012859920086357],[2,1.761018832146934,0],[4,-1.468441014773953,0.04718056323028655],[5,1.01592849428587,0.2100727430713786],[5,0.3698484913733249,0.4857070954150819],[1,-0.04432108094308163,0.955678919056918],[5,-1.042060486791408,0.1994481965627563],[5,-0.995074064532705,0.2187231638990162],[0,-0.917138784949153,0],[5,1.925851688869405,0.01191614884437143],[3,-0.4199172602394874,0.5273582725916113],[0,-0.4486770883559106,1.],[2,-0.5974068788291778,0.4073371711924433],[2,-1.873492727056278,0],[2,-1.752892346066227,0],[2,1.675804063474005,0],[1,-0.3653095078704933,0.6346904921295067],[1,0.4224580025095308,0.5775419974904692],[0,0.7149907964786077,0],[4,-2.344519585095232,0.00002434958265055154],[5,-3.046369428774015,0],[1,1.272071466049723,0],[3,1.433413045768294,0.03031436401978349],[3,0.0999652821035257,0.657173088452961],[4,-0.977486280851,0.208360226766042],[1,-0.2960655553066531,0.7039344446933469],[2,1.270407255787005,0.02635641409762698],[4,-0.4210147796544539,0.4960296263170482],[1,-0.5703748073105819,0.4296251926894181],[4,2.133596179949922,0.000750980620326778],[1,0.420571156340275,0.579428843659725],[0,0.986360179721539,0],[0,-0.6499187976747751,0],[0,-0.971242724771721,0],[2,-0.4263029962475136,0.5682657553903924],[0,0.2834384781025823,1.],[3,-2.077122809942954,0],[3,2.427530918267491,0],[1,0.7345323659993424,0.2654676340006576],[2,-0.965274676860826,0.142965585603147],[4,-2.632282456412139,0],[3,0.1759964954775606,0.6384176254153954],[4,2.445901518447484,3.568856287555576e-7],[5,0.03988304897511163,0.5492052953408081],[4,-1.633473496318999,0.02349179275465371],[3,2.186087176881851,0],[4,1.539385110878031,0.03548019623919312],[3,-1.933675829348855,0.00004862551721402389],[1,1.206753895681448,0],[3,2.405457885374683,0],[5,-1.865038207232537,0.01569144728556416],[2,-0.7734158348387332,0.2639622745315475],[4,-1.837984570149432,0.008003154585102078],[5,1.783220169616426,0.02220295659408566],[4,2.765180499477694,0],[0,0.4989484016500358,1.],[1,-0.8746914128212055,0.1253085871787945],[5,-2.570561843796594,0.0001217087778676354],[5,0.1505707630152466,0.5387862730703027],[0,0.94220501789167,0],[4,0.55210395756604,0.4316721470704398],[5,-1.645030879939899,0.03777794520424924],[2,-1.589173551929681,0],[4,-0.224343417108992,0.5681353792731021],[0,0.3368492438384778,1.],[1,-1.210418012592633,0],[0,0.61430579939059,0],[1,-1.142002754233421,0],[1,0.5832236955329415,0.4167763044670585],[2,1.084949465915004,0.08613347292212009],[1,-0.8339854628134336,0.1660145371865664],[3,-1.06323280385756,0.1370073202711472],[2,1.241743800739056,0.03334813222835421],[3,0.755865638275417,0.3112592431682032],[3,-0.2480854808401556,0.6127546457018715],[3,-1.606942744190517,0.01012083169546244],[3,1.537277032901063,0.01651246529712242],[1,0.4758357564216091,0.5241642435783909],[3,0.2881928418833635,0.5955794972384161],[1,-0.005334867158182766,0.994665132841817],[2,0.2308675785933598,0.6967001611544388],[3,-2.122300010687883,0],[5,-3.221614618795853,0],[2,-0.07924024513925509,0.7437209835502708],[4,2.403385111847145,3.630487786590479e-6],[3,-1.774792957403657,0.001903683089695766],[2,0.810748361169261,0.2375339108154298],[3,-0.925097320954859,0.2067130944337957],[2,0.008267433049603312,0.7499316495507703],[0,0.3181495941568291,1.],[0,-0.3342039165675237,1.],[5,3.204014645529326,0],[0,0.05217822441732567,1.],[2,0.1415003700294921,0.7299776452815168],[1,-0.2851647469700427,0.7148352530299573],[5,-2.208809459176865,0.002583593514891873],[2,-1.394353283246838,0.005580614380361403],[4,1.681847013552464,0.01866924857754936],[4,-2.784058208152728,0],[1,0.6504751586167339,0.3495248413832661],[1,1.32314273838669,0],[4,-1.338092898114563,0.07579750257120622],[3,0.8867896572092071,0.2289546441147977],[4,1.260878438561237,0.0975489253318492],[5,-3.480760852272127,0],[4,1.533688151355394,0.0363293792589824],[3,-0.5684648176062979,0.4353647599130466],[4,-1.739140815671079,0.01396387355943902],[1,-1.178573260288627,0],[5,0.7579035165919914,0.3244405135675377],[1,0.2479962454392783,0.7520037545607217],[5,2.977997118441339,4.297506663573322e-11],[1,0.07252436873493462,0.927475631265065],[5,1.241406018584233,0.1276064962955045],[3,0.1726781812781752,0.6394233501673868],[4,-0.08629601700472955,0.5943178212007812],[2,-0.04927185510454812,0.7475722842945564],[5,3.361364967360926,0],[5,-1.782826562447534,0.02223871183227135],[1,-1.009951740280895,0],[2,-0.4821489456362302,0.5175323942218715],[1,0.4533115318837799,0.5466884681162201],[0,-0.5906004388299237,0],[1,-1.034734563394638,0],[0,0.5652371265931695,0],[5,-1.127652246857071,0.1664979213901553],[5,0.4907811288035946,0.441698280269602],[0,0.1615802663379475,1.],[0,-0.8026824757785485,0],[3,0.174399701904927,0.6389036164341591],[2,0.02991447348235088,0.7491051242762737],[0,0.6836234204636704,0],[3,1.448437709534207,0.02796613494180733],[2,-1.881666035598699,0],[0,0.954340222283418,0],[0,-0.001238804758712408,1.],[3,1.308175349224147,0.05518700775558212],[3,2.035407889815355,0],[0,-0.523750318251281,0],[2,-1.584008930315042,0],[3,0.1423337052537188,0.6478495440026075],[4,-1.714877397231489,0.01583210566687905],[0,-0.4927169037855044,1.],[3,1.783531310604762,0.001690573327704499],[4,-1.245606463851815,0.1022904705550033],[1,-0.08595171595677153,0.914048284043228],[1,0.04552607034052203,0.954473929659478],[0,0.4789094708163142,1.],[3,-0.6581989034806002,0.3760152422456795],[3,-1.850308232045453,0.000559039510132488],[1,-0.6676205858727529,0.3323794141272471],[5,2.520562664372149,0.0002110950307213859],[4,1.7298353833825,0.01465962992030658],[0,0.6993940386054316,0],[4,-2.422780968079707,1.481447170811023e-6],[0,-0.3951896991672545,1.],[5,-1.377049630451432,0.08914000304138009],[1,0.1797240501972126,0.8202759498027874],[3,2.074057352684171,0],[5,2.632142612256113,0.00005613273023446152],[3,-0.5579988922517543,0.4421739415441217],[4,-1.148217902803179,0.1359378503724835],[2,1.733225882901053,0],[3,-0.6716181817335298,0.3670694210251839],[2,-0.915126405926012,0.1710385605225122],[1,0.8674058101414091,0.1325941898585909],[3,-2.35394008831429,0],[1,-1.096065773912908,0],[0,-0.1279574351853445,1.],[5,2.93884517482102,7.1280772714214e-9],[3,1.89291453484831,0.0002046634694778563],[3,1.551398151787008,0.01504637651243537],[2,-0.949118791177752,0.1517350531167305],[0,0.818334651255519,0],[2,-1.932360499874036,0],[5,0.7250905810029404,0.3395243138963002],[3,1.46897792673933,0.02495666052868695],[0,0.7707528662834755,0],[1,-0.7645773658139483,0.2354226341860517],[2,-1.819796636338805,0],[4,1.918543832292402,0.004762737925316608],[2,-1.040412165290283,0.1056104889065832],[2,1.371809636493808,0.008216384647924857],[1,0.8121146421865584,0.1878853578134416],[2,0.6643998241619968,0.3491138269302509],[3,1.583412537471113,0.01204945310816532],[1,-0.4058319657665517,0.5941680342334483],[0,-0.4036344825266744,1.],[2,1.478382101265543,0.0002336667728466108],[4,-1.055720117947029,0.1731816882685974],[4,-1.770358898344115,0.01180934797863603],[1,-1.140495590162456,0],[2,-0.2778088271049572,0.672822255582568],[1,-1.027544953319199,0],[3,-1.196423180209897,0.08648304074884805],[4,-0.6097912122885663,0.401061700377149],[5,0.4433764004989218,0.4599420197665358],[0,-0.7020713114533685,0],[2,0.7225334613431764,0.3022271093655111],[4,1.573102216413473,0.03075502843968555],[5,2.936385316659139,8.681716550968292e-9],[4,-2.45483264565394,1.734152831025695e-7],[3,1.410466948404626,0.03414862526857889],[0,0.007547671930905331,1.],[4,1.233336026942437,0.1062057145614459],[1,-0.6764319502944016,0.3235680497055984],[4,-1.142764658955327,0.1379940312129584],[5,0.7575603101465682,0.3245983993146056],[5,-0.1002517982514959,0.5449991973466594],[3,-1.060329480936557,0.1382851530050476],[0,-0.07750653571318455,1.],[3,-1.803322568039571,0.001267979805154399],[2,-0.3841304566650701,0.6024437922622847],[0,-0.8028199940339351,0],[3,0.2664253234385094,0.6051399751927565],[2,-0.4749751803162923,0.5243985780835056],[0,-0.1083771052701268,1.],[1,-0.2123401326478442,0.7876598673521558],[1,-0.8669040341381833,0.1330959658618167],[0,0.4221868363314236,1.],[3,-1.086605606133583,0.1270058644342961],[0,-0.7456864569601138,0],[2,-1.829198476724384,0],[0,0.5139407165372063,0],[3,-0.3917283081205924,0.5432711627862699],[3,-0.0854840487816344,0.6596714823796048],[5,2.451867897901228,0.0004123300087662709],[0,0.5041291052848074,0],[5,3.498662084838571,0],[4,2.759620684104151,0],[1,1.079543278388781,0],[1,1.117305648568296,0],[2,-0.147009706335326,0.7283881462432012],[2,1.98712904519543,0],[0,0.901488337580396,0],[5,1.942444672416161,0.01102384242757596],[4,-1.542685091026552,0.03499516524042082],[0,-0.7316410662932,0],[5,-1.953659296661848,0.01045162718666338],[1,-0.6620983733817996,0.3379016266182004],[0,-0.05761087216949834,1.],[4,0.03402817848074235,0.5982349704445397],[4,2.32785144895158,0.00003659335635212602],[1,-1.365985682918458,0],[4,-2.972620380029688,0],[3,0.2213906656788744,0.6230784416937975],[0,-0.8099593691977396,0],[5,-1.919164472058064,0.01229166501065968],[2,1.67644838924832,0],[3,0.122713980349094,0.6525319034883377],[1,0.1679788261219846,0.8320211738780154],[4,-2.090080867673048,0.001176471777974051],[4,-0.6012718984916341,0.4056351759826628],[1,-0.3530402581005396,0.6469597418994604],[2,0.95302229687421,0.1495923038583822],[2,1.583686399416816,0],[5,2.400055196997611,0.0006477019910486087],[5,1.681686592797881,0.03301933163077058],[3,0.4136964264057152,0.5309229157116218],[4,-0.1528445277131598,0.5844938666333806],[4,0.3721151213406566,0.5172082555564047],[1,-0.993454178301779,0.0065458216982206],[0,-0.959571456021902,0],[4,1.941916285645663,0.004041905503740362],[2,-0.7732557285726429,0.26407861802624],[3,-2.328878039120808,0],[1,-0.5078365165204655,0.4921634834795345],[2,-0.437869704509664,0.5582701218726195],[2,-0.4438184793662838,0.5530251573729995],[5,-3.273934811345486,0],[4,2.340233321190769,0.00002714773413669246],[5,3.092763583065604,0],[2,-1.399674931895141,0.005032559645122329],[5,-2.428225012746297,0.0005092658075991932],[3,-2.483011106191623,0],[1,0.2586493273180497,0.7413506726819503],[0,-0.4758792846537401,1.],[2,-0.6292526286265501,0.3791004923768864],[3,-1.157493079162137,0.0996710838513288],[2,-0.5753693940319708,0.4274708787464024],[2,1.011331790566377,0.1193983094555316],[3,-1.430968836773894,0.0307083798282533],[5,-0.305088715320496,0.5054061017139733],[3,2.092021279999864,0],[0,-0.5167902553596249,0],[0,-0.0006049323984509414,1.],[0,0.2024942073325238,1.],[5,3.28806158919171,0],[5,-1.027438067690741,0.2053629620204017],[3,-2.465283105989855,0],[1,0.6320251473068479,0.3679748526931521],[3,1.976054686571528,2.288286127595448e-6],[1,0.7560494995881097,0.2439505004118903],[1,0.913492695739563,0.08650730426043651],[0,-0.3768919576039851,1.],[0,-0.4256002659672786,1.],[5,-2.014343284364672,0.00775259649038197],[3,-1.79664162925915,0.001401634926537244],[1,1.302710647493554,0],[4,-0.741328417898965,0.3295713801095868],[0,-0.6035965955429785,0],[5,0.8676329268348126,0.2743054744133533],[5,2.937336426345436,8.051829084541415e-9],[2,0.2188691251976085,0.7020963060352336],[1,-0.68718533993292,0.31281466006708],[5,1.10992963072323,0.1730744786385949],[2,0.8466987068331528,0.2134012898267374],[4,0.141692278874614,0.5865111631401294],[4,2.945653335614031,0],[5,-1.575563704054734,0.04818034763593769],[4,-0.3620250169880932,0.5213388321161715],[5,-3.383436491643324,0],[4,1.235315338607687,0.1055677945434459],[3,-0.5179338091050523,0.4678805145481283],[5,-0.4578916740333396,0.4544800539916886],[3,-1.950673246522338,0.00002000305584302223],[0,0.957752674020303,0],[0,-0.7535406972714784,0],[2,-1.34303629495676,0.01231880235045062],[5,0.4891194378536805,0.4423568867378128],[3,-2.245680984694843,0],[1,0.6008686699781522,0.3991313300218478],[1,0.967294944269083,0.0327050557309172],[5,-0.4013330615765671,0.4750839824754396],[3,-1.522798987563724,0.01811143321749132],[0,-0.2331632575560354,1.],[1,-0.3852316651853986,0.6147683348146014],[3,1.408296094821446,0.03452725532554287],[0,0.1341413684288821,1.],[2,-1.889664851935135,0],[2,-1.027959995505114,0.111410882921766],[4,2.872761050569994,0],[4,0.07366422688450669,0.5955741833857285],[4,-1.510820297495127,0.03989234289345074],[2,-0.495714322301545,0.50426731066512],[2,-0.1083394314684254,0.7382625675890984],[3,-1.655641210382147,0.006805848346698539],[5,2.179567399597233,0.003097656798909159],[2,0.1588045599509433,0.7247811117387872],[1,-0.4327341442959036,0.5672658557040964],[3,-2.310814968988097,0],[2,-1.742681131552997,0],[1,0.01893827928443148,0.981061720715569],[3,-1.457342497194506,0.02663337386377761],[0,-0.1659479509847794,1.],[2,0.274532521867469,0.6746318944370876],[5,-0.6834501036111607,0.3585679105448749],[5,-1.989735571075167,0.00876988832513778],[0,0.3003385832822261,1.],[0,-0.6510619647531728,0],[5,-0.946368287377612,0.2394655544031842],[5,3.378843820921967,0],[1,0.1665021332176855,0.8334978667823145],[0,-0.3218609224315396,1.],[3,1.743718834997471,0.002805426004055175],[0,0.8875254274141011,0],[4,-1.834963299086493,0.008150255256775193],[4,1.16914942494346,0.1282128962187293],[5,1.91591434734936,0.01247755298049761],[4,-1.401536196339321,0.06064451794965423],[4,-1.765514547095974,0.0121261113774057],[5,-1.19789383271894,0.1417865858358936],[3,-1.394873871906636,0.03693060866361412],[5,0.2890613510440601,0.5097990104749558],[1,0.7794801907253202,0.2205198092746798],[2,1.019245539121807,0.1155624258271408],[3,-2.286449896211295,0],[2,0.6700173225749131,0.3444356224128579],[3,1.574057383491539,0.01287958983809347],[0,-0.08134165946014971,1.],[0,0.8647223233958066,0],[2,-0.3985366210169703,0.5911685617083758],[1,-0.928098833754175,0.07190116624582488],[3,-0.4169164759643795,0.5290813937329267],[1,1.215905288529518,0],[0,0.98641644842686,0],[3,-0.5598976149451251,0.4409411743205448],[2,0.943136993457917,0.1550482040275441],[5,0.1598394088685025,0.5373801705254757],[2,-1.386246788362712,0.006469896578898832],[5,-1.995984590851706,0.008501991079727448],[0,0.07920381068821802,1.],[0,-0.8533217713309584,0],[0,-0.2205578249290392,1.],[3,-1.467071878929923,0.0252263642035037],[2,1.619098257756885,0],[3,1.384973635861462,0.03877304850188572],[3,2.136878730583272,0],[2,-0.3609544916704301,0.6197118549429414],[5,0.8806905081703797,0.2684366004232427],[0,0.7959011151765609,0],[5,2.69416239728414,0.00002229837208785541],[5,-2.694458938852832,0.00002219047849024129],[0,-0.02453078965269384,1.],[3,0.1765093148259578,0.6382607497984897],[2,1.641556895022645,0],[1,-0.922305450370511,0.07769454962948941],[5,2.822048406736481,1.487058855944288e-6],[2,1.733666795140516,0],[4,-0.3151926372817515,0.5393342609389721],[2,-1.895550238537012,0],[4,-0.7664419061158396,0.3159821246388254],[2,0.258983491325294,0.6829275512209614],[2,0.6027216818459076,0.4025541901147184],[1,-1.090164463215863,0],[3,-1.484629059889757,0.02281437256832518],[3,0.4290431797481054,0.5220773325441732],[0,-0.6982670218315681,0],[0,0.6253819068054098,0],[0,0.0418524368973614,1.],[5,2.868888133795338,3.228707846724886e-7],[5,2.355845177891877,0.000924208727162398],[5,2.680716104346557,0.00002765055307421023],[0,0.5184543433823436,0],[4,-2.336182213592552,0.00003000771809141179],[1,1.018417133044671,0],[4,0.7537952170692894,0.3228149675041163],[0,0.6039639838904658,0],[1,0.3928320091097688,0.6071679908902312],[3,-2.152115569634948,0],[4,0.2605977263947472,0.5576668308795555],[5,0.6079068021462177,0.3924482164986551],[5,3.043974855692198,0],[5,1.610260440370984,0.04275059292907649],[3,-2.142706363758405,0],[5,1.91338408046351,0.01262381685178248],[1,1.0398476758904,0],[3,1.125147399236863,0.111597229067797],[5,1.085080849057888,0.1825168703894858],[5,2.396726648596217,0.0006658700195852345],[4,1.290255886000524,0.0888374738802658],[4,-1.454487189894977,0.04978498652075087],[0,0.617351114439896,0],[2,-1.33064576029524,0.0143404292529887],[3,0.8822298000963436,0.2316699508750175],[4,-0.2768676450854586,0.5525175490871632],[4,1.7292522238451,0.01470408076841232],[1,-0.05062179442575721,0.949378205574243],[1,-0.4877986959541909,0.5122013040458091],[2,-0.2111507449911061,0.7054153628897009],[1,-1.205133505195578,0],[4,-1.37288749483771,0.06719027542419093],[1,-0.2207457894723082,0.7792542105276918],[0,-0.984771275755969,0],[4,-1.516313017121899,0.03901363854048664],[1,1.215983440365129,0],[1,-0.8708210789212958,0.1291789210787042],[2,1.100995403978255,0.07960233382323778],[1,-0.1045227833148679,0.8954772166851321],[0,-0.7009333438238334,0],[3,1.94956198006738,0.0000213856687921664],[1,-0.476616529598141,0.523383470401859],[0,0.2090945142707548,1.]];
    for(i=0; i<points.length; i++) {
        err = Math.abs(spl[points[i][0]](points[i][1]) - points[i][2]);
        t.ok(err<1e-6, "Checking accuracy of B-spline of order " + points[i][0] + " at position " + points[i][1] + " (err=" + err + ")");
    }
    
    t.end();
});