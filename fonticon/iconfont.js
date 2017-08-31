;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.9359 508.1354m-441.7966 0a431.442 431.442 0 1 0 883.5932 0 431.442 431.442 0 1 0-883.5932 0Z"  ></path>' +
    '' +
    '<path d="M567.9462 409.556l64.853-62.805c0 0 23.7015-16.9277 40.0855-1.2268s54.8055 34.6778 27.4985 70.1757l-108.544 106.496L696.9702 629.374c0 0 10.923 16.385-2.048 33.451s-40.7613 58.7848-66.219 36.181c-31.2801-27.7729-104.448-109.909-104.448-109.909l-109.396 105.472c0 0-24.193 27.178-52.8814-2.0572-29.3069-29.866-34.7832-46.8931-20.3346-65.5268 16.2939-21.0145 112.64-107.52 112.64-107.52l-108.544-109.568c0 0-11.946-22.869 5.804-41.984 17.748-19.115 36.181-42.326 61.44-23.211 25.258 19.115 109.5639 109.227 109.5639 109.227L567.9462 409.556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M702.2725 747.5927c-52.8855 37.5183-114.7638 56.3272-178.0214 55.4609-8.364-0.0881-16.6707-0.5274-24.875-1.2585-3.3536-0.3205-6.7092-0.8765-10.0782-1.3015-6.4604-0.8663-12.9352-1.7428-19.2215-2.9747-3.8973-0.7475-7.7046-1.7582-11.5128-2.6522-6.1676-1.4664-12.3075-2.945-18.3265-4.7606-2.901-0.9083-5.7272-1.9487-8.5985-2.9297-6.9437-2.3583-13.8588-4.7892-20.5967-7.6462-1.5227-0.6175-2.988-1.3455-4.5117-2.0367-7.852-3.5021-15.6457-7.1772-23.1465-11.308-0.3656-0.1915-0.6738-0.3523-1.0394-0.5407-25.4464-14.1527-48.7393-31.8188-69.1599-52.4605-0.3082-0.3205-0.6451-0.7035-0.981-1.0691-6.3437-6.4471-12.3935-13.185-18.1514-20.2158-1.2012-1.495-2.3736-3.1058-3.5891-4.6438-41.5601-52.6479-66.6255-119.2745-66.6255-191.7614h70.498304c1.8207 0 3.583-0.9759 4.5066-2.6911 0.9247-1.7152 0.77-3.7233-0.2314-5.2449L180.1073 307.5871c-0.9155-1.3896-2.4893-2.304-4.2762-2.304s-3.3618 0.9155-4.2762 2.304L53.0493 487.554c-1.0015 1.5217-1.1551 3.5297-0.2314 5.2449 0.9247 1.7152 2.686 2.6911 4.5076 2.6911h70.51264c0 85.2163 26.2369 164.2045 70.8147 229.5122 0.5427 0.9103 0.938 1.877 1.538 2.7863 4.6141 6.6785 9.7423 12.8461 14.6934 19.1601 1.8463 2.388 3.5748 4.8476 5.4938 7.1905 7.296 8.9661 15.0446 17.3896 23.0144 25.6225 0.7619 0.8202 1.4653 1.6251 2.2129 2.3583 26.75 27.1155 57.001 49.9702 89.9031 68.2373 0.8499 0.514 1.6998 1.0424 2.6368 1.5247 9.4781 5.1548 19.2195 9.814 29.0939 14.2244 2.4617 1.068 4.864 2.2702 7.3687 3.326 8.4388 3.5451 17.11 6.6499 25.856 9.6102 4.1308 1.4213 8.233 2.8713 12.4221 4.1738 7.6329 2.2856 15.4409 4.2045 23.3216 6.0938 5.2152 1.2308 10.3997 2.5641 15.7194 3.5891 2.2118 0.4547 4.2916 1.1438 6.4614 1.4797 7.4117 1.3332 14.8828 2.0797 22.3099 2.988 2.6808 0.3236 5.3176 0.7782 7.9995 1.0691 13.3458 1.3343 26.6465 2.2118 39.935 2.2118 81.3189 0 160.6605-25.1812 228.7196-73.4515 21.6832-15.4245 26.9722-45.6899 11.7801-67.6792C753.8964 737.4848 723.9537 732.1672 702.2725 747.5927"  ></path>' +
    '' +
    '<path d="M927.9171 495.49c-0.044-84.951-26.1202-163.7806-70.4778-228.9551-0.6451-1.1131-1.0854-2.2415-1.8156-3.2819-5.5081-7.9688-11.5313-15.3969-17.5206-22.8383-0.6881-0.9083-1.3322-1.8606-2.0654-2.7546-40.5955-49.8668-91.5589-88.3804-149.3217-113.5616-1.5985-0.7035-3.1642-1.4797-4.7749-2.1832-9.216-3.838-18.6655-7.2366-28.1559-10.4448-3.4284-1.1428-6.783-2.4023-10.284-3.4427-8.277-2.5344-16.6717-4.5998-25.1402-6.5782-4.6725-1.0988-9.345-2.2999-14.078-3.2369-2.3429-0.4547-4.5548-1.1571-6.869-1.5821-6.314-1.0988-12.6577-1.5821-18.986-2.4166-4.395-0.5571-8.6733-1.2452-13.097-1.6998-10.6353-0.9964-21.1845-1.4203-31.7307-1.6108-1.9343 0-3.7939-0.3082-5.7129-0.3082-0.3512 0-0.6728 0.1034-1.025 0.1321C445.6448 90.7858 366.4794 115.6168 298.5062 163.8277c-21.7395 15.3815-27.0285 45.6765-11.8221 67.6803 15.1767 22.0037 45.1635 27.3357 66.859 11.9091 52.5036-37.2234 113.7531-56.063 176.5704-55.4916 9.0388 0.0584 17.9313 0.512 26.7213 1.3476 2.7095 0.3082 5.3914 0.7178 8.0855 1.0547 7.2233 0.894 14.3862 1.9333 21.4456 3.3403 3.1212 0.6154 6.1983 1.4203 9.2426 2.1248 6.9304 1.5811 13.8455 3.2809 20.6131 5.3473 2.1381 0.6881 4.2465 1.4643 6.3857 2.1678 7.721 2.5631 15.3231 5.3176 22.7963 8.4675 0.7598 0.3215 1.538 0.7178 2.2702 1.025 44.7386 19.4836 83.9854 49.4715 114.603 87.0031 0.1915 0.2191 0.3799 0.513 0.5571 0.7322 43.0981 53.119 69.0432 121.0184 69.0719 194.9542h-70.528c-1.8207 0-3.583 0.9759-4.5066 2.6911s-0.77 3.7233 0.2324 5.2449l118.5321 179.9537c0.9155 1.3885 2.4893 2.304 4.2772 2.304 1.7869-0.001 3.3608-0.9165 4.2752-2.305l118.4768-179.9537c1.0025-1.5217 1.1561-3.5287 0.2314-5.2449-0.9236-1.7152-2.686-2.6911-4.5066-2.6911H927.917056L927.9171 495.49z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M760.384 441.376l0-103.616c0 0-0.032-241.728-241.728-241.728-241.696 0-241.728 241.728-241.728 241.728l0 103.616L173.312 441.376l0 483.488L864 924.864 864 441.376 760.384 441.376zM553.184 708.064l0 113.184-69.056 0 0-113.184c-20.544-11.968-34.528-34.016-34.528-59.488 0-38.176 30.944-69.088 69.056-69.088 38.112 0 69.056 30.912 69.056 69.088C587.744 674.048 573.76 696.096 553.184 708.064M691.328 441.344 345.984 441.344l0-103.136c0.384-28.928 10.56-173.12 172.672-173.12s172.288 144.192 172.672 172.672L691.328 441.344z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M854.534865 259.712043c11.280928-11.280928 11.280928-29.740348 0-41.022299l-49.226145-49.227168c-11.280928-11.280928-29.740348-11.280928-41.022299 0L532.509614 401.23836c-11.279904 11.280928-29.740348 11.280928-41.021276 0L259.712555 169.4636c-11.280928-11.280928-29.740348-11.280928-41.022299 0l-49.226145 49.228191c-11.280928 11.280928-11.280928 29.740348 0 41.022299l231.774761 231.773737c11.280928 11.280928 11.280928 29.740348 0 41.022299L169.463088 764.283864c-11.280928 11.280928-11.280928 29.740348 0 41.022299l49.226145 49.228191c11.280928 11.280928 29.741371 11.280928 41.022299 0L491.487316 622.759593c11.280928-11.280928 29.741371-11.280928 41.021276 0L764.286422 854.535377c11.280928 11.280928 29.740348 11.280928 41.022299 0l49.226145-49.227168c11.280928-11.280928 11.280928-29.740348 0-41.022299L622.759081 532.510126c-11.280928-11.280928-11.280928-29.741371 0-41.022299L854.534865 259.712043z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-delete" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.74632 236.173954 663.065578 236.173954l0.585331-93.879134c0-12.455683-10.097986-22.551622-22.551622-22.551622L384.068306 119.743198c-12.455683 0-22.551622 10.095939-22.551622 22.551622l-0.583285 93.879134L134.25368 236.173954c-12.456706 0-22.551622 10.096962-22.551622 22.551622 0 12.455683 10.094916 22.551622 22.551622 22.551622l62.573127 0 0 600.427982c0 12.455683 10.095939 22.551622 22.551622 22.551622L804.619524 904.256802c12.45466 0 22.551622-10.095939 22.551622-22.551622L827.171146 281.277198l62.574151 0c12.45466 0 22.551622-10.095939 22.551622-22.551622C912.297942 246.270916 902.199956 236.173954 889.74632 236.173954zM406.619928 164.846442l211.92569 0-0.585331 71.327512L406.036643 236.173954 406.619928 164.846442zM782.067902 859.153558 241.930051 859.153558 241.930051 281.277198l540.136827 0L782.066879 859.153558z"  ></path>' +
    '' +
    '<path d="M355.878267 755.790422c12.455683 0 22.551622-10.095939 22.551622-22.551622L378.429889 408.477228c0-12.45466-10.095939-22.551622-22.551622-22.551622-12.45466 0-22.551622 10.097986-22.551622 22.551622l0 324.761572C333.326645 745.694483 343.42463 755.790422 355.878267 755.790422z"  ></path>' +
    '' +
    '<path d="M506.945891 755.790422c12.455683 0 22.551622-10.095939 22.551622-22.551622L529.497513 408.477228c0-12.45466-10.095939-22.551622-22.551622-22.551622-12.45466 0-22.551622 10.097986-22.551622 22.551622l0 324.761572C484.393245 745.694483 494.491231 755.790422 506.945891 755.790422z"  ></path>' +
    '' +
    '<path d="M658.012492 755.790422c12.455683 0 22.551622-10.095939 22.551622-22.551622L680.564114 408.477228c0-12.45466-10.095939-22.551622-22.551622-22.551622-12.455683 0-22.551622 10.097986-22.551622 22.551622l0 324.761572C635.46087 745.694483 645.556808 755.790422 658.012492 755.790422z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M810.905182 179.405019C655.417899 23.907503 403.378605 23.907503 247.871879 179.385577c-155.506726 155.466817-155.506726 407.556253 0 563.011814 155.506726 155.488307 407.54602 155.488307 563.03228 0C966.370976 586.940806 966.370976 334.871837 810.905182 179.405019zM785.319457 716.831109c-141.366681 141.347239-370.514615 141.347239-511.841388 0-141.366681-141.366681-141.366681-370.513592 0-511.87004C414.804842 63.644529 643.951753 63.644529 785.319457 205.000977 926.645207 346.317517 926.645207 575.464427 785.319457 716.831109z"  ></path>' +
    '' +
    '<path d="M693.595406 273.220708l23.454178 23.463388L365.161189 648.571469l-23.453155-23.462365L693.595406 273.220708z"  ></path>' +
    '' +
    '<path d="M717.049584 625.109104l-23.454178 23.462365L353.454566 308.421418l23.433712-23.473621L717.049584 625.109104z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-androidcancel" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 96C281.118 96 96 281.118 96 512c0 230.872 185.118 416 416 416 230.87 0 416-185.128 416-416C928 281.118 742.872 96 512 96zM720.004 661.762l-58.24 58.234L512 570.234l-149.762 149.762-58.242-58.234L453.762 512l-149.766-149.762 58.242-58.232L512 453.762l149.762-149.756 58.24 58.232L570.238 512 720.004 661.762z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontcolor93" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.216 0 0 229.248 0 512s229.216 512 512 512c282.752 0 512-229.248 512-512S794.752 0 512 0zM800.432 544 223.536 544C206.128 544 192 529.664 192 512c0-17.68 14.128-32 31.568-32l576.88 0C817.904 480 832 494.32 832 512 832 529.664 817.872 544 800.432 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont30" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M371.088 66.176l0 130.352 0 43.744 43.568 4.048c350.384 32.576 548.976 131.712 559.152 279.136 8.336 120.848-112.224 270.352-275.344 367.632 79.904-95.568 150.288-215.552 113.776-319.472-36.768-104.688-164.368-162.608-390.096-177.04l-51.056-3.264 0 51.168 0 82.816L52.976 295.744 371.088 66.176M392.976 0c-7.744 0-16.768 3.296-26.336 10.208L23.424 257.872c-28.848 20.832-28.848 54.912 0 75.744l343.2 247.664c9.584 6.928 18.592 10.208 26.336 10.208 15.6 0 26.128-13.28 26.128-37.056l0-111.952C1175.44 490.832 486.704 1024 500.096 1024c0.048 0 0.128-0.016 0.208-0.032 450.752-105.856 941.008-732.4-81.2-827.44L419.104 37.056C419.088 13.296 408.56 0 392.976 0L392.976 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M748.725516 382.877177 296.794613 382.877177l0-86.081541c0-108.191094 91.462085-193.011922 208.480218-193.684234 114.327862 0.630357 200.409402 83.685981 200.409402 193.684234l0 43.041282c0 11.894911 9.625218 21.520129 21.520129 21.520129s21.520129-9.625218 21.520129-21.520129l0-43.041282c0-134.082788-103.903441-235.422847-242.10606-236.725516-0.925069 0-1.765203 0-2.690272 0C363.41594 61.371766 253.753331 164.897607 253.753331 296.794613l0 88.25709c-72.810283 10.555403-129.122823 72.78163-129.122823 148.468426l0 279.766798c0 83.055624 67.588351 150.643975 150.643975 150.643975l473.451032 0c83.055624 0 150.643975-67.588351 150.643975-150.643975L899.369491 533.520129C899.368468 450.464505 831.78114 382.877177 748.725516 382.877177zM856.328209 813.286927c0 59.349713-48.25298 107.602693-107.602693 107.602693L275.274484 920.889621c-59.349713 0-107.602693-48.25298-107.602693-107.602693L167.671791 533.520129c0-59.349713 48.25298-107.602693 107.602693-107.602693l473.451032 0c59.349713 0 107.602693 48.25298 107.602693 107.602693L856.328209 813.286927zM512 512c-71.202669 0-129.122823 57.920154-129.122823 129.122823 0 63.981197 46.88175 116.849288 108.033505 126.992299-0.078795 0.735757-0.430812 1.3743-0.430812 2.130524l0 64.561411c0 11.894911 9.625218 21.520129 21.520129 21.520129s21.520129-9.625218 21.520129-21.520129L533.520129 770.245645c0-0.756223-0.357134-1.394766-0.430812-2.130524 61.146639-10.143011 108.033505-63.011102 108.033505-126.992299C641.122823 569.920154 583.202669 512 512 512zM512 727.205387c-47.454802 0-86.081541-38.627762-86.081541-86.082564s38.627762-86.081541 86.081541-86.081541 86.081541 38.627762 86.081541 86.081541S559.453778 727.205387 512 727.205387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao58" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832.0512 190.8736c-87.0144-87.0144-202.7264-134.9376-325.8112-134.9376-123.1104 0-238.8224 47.9488-325.8624 134.9888-179.6608 179.6608-179.6608 471.9872 0 651.6224 87.0144 87.0144 202.7264 134.9376 325.8368 134.9376 123.0848 0 238.7712-47.9232 325.8112-134.9376C1011.712 662.8864 1011.712 370.5344 832.0512 190.8736zM804.864 815.4112c-79.7696 79.7696-185.8304 123.6992-298.6496 123.6992-112.8448 0-218.9056-43.9296-298.6752-123.6992s-123.6992-185.856-123.6992-298.6752 43.9296-218.88 123.6992-298.6496c79.7696-79.7952 185.8816-123.7504 298.7008-123.7504s218.88 43.9552 298.6496 123.6992C969.5744 382.72 969.5744 650.7008 804.864 815.4112z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.529607 361.094058c20.308535 43.699268 31.665187 92.39841 31.665187 143.755078 0 188.631148-152.929018 341.56119-341.56119 341.56119S168.073438 693.482331 168.073438 504.85016c0-188.631148 152.929018-341.560166 341.56119-341.560166 51.780317 0 100.857059 11.544941 144.830573 32.166607l52.058656-52.868091c-58.503439-31.861662-125.58116-49.967018-196.889229-49.967018-227.669256 0-412.228669 184.5369-412.228669 412.227646 0 227.646744 184.559413 412.229692 412.228669 412.229692 227.669256 0 412.228669-184.582949 412.228669-412.229692 0-71.110571-18.002003-138.01126-49.694819-196.394972L819.529607 361.094058zM332.964906 681.519882l141.334959-47.111994L827.640332 304.624952l-47.110971-47.111994L450.744379 587.295893l-23.556509-23.556509L756.970806 233.95645l-47.111994-47.111994L380.0769 540.184923 332.964906 681.519882zM812.986587 241.272066l39.797401 39.797401 39.772842-39.797401 19.898189-19.874653c32.964786-32.987299 32.964786-86.402859 0-119.390157-32.964786-32.94125-86.403882-32.94125-119.366621 0l-19.875676 19.875676-39.796378 39.796378 39.796378 39.796378L812.986587 241.272066zM840.890101 147.048077c7.338129-7.314593 19.208481-7.314593 26.545586 0 7.313569 7.314593 7.313569 19.184945 0 26.546609l-13.274328 13.249769-26.524097-26.546609L840.890101 147.048077z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fuxuankuang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.541835 172.393325c8.866948 0 17.259082 3.508917 23.63121 9.881045 6.372128 6.372128 9.881045 14.764262 9.881045 23.63121l0 611.93199c0 8.866948-3.508917 17.259082-9.881045 23.63121-6.372128 6.372128-14.764262 9.881045-23.63121 9.881045L205.609845 851.349825c-8.866948 0-17.259082-3.508917-23.63121-9.881045-6.372128-6.372128-9.881045-14.764262-9.881045-23.63121L172.09759 205.906603c0-8.866948 3.508917-17.259082 9.881045-23.63121 6.372128-6.372128 14.764262-9.881045 23.63121-9.881045L817.541835 172.394349M817.541835 129.414465 205.609845 129.414465c-42.070164 0-76.491115 34.420951-76.491115 76.491115l0 611.93199c0 42.070164 34.420951 76.491115 76.491115 76.491115l611.93199 0c42.070164 0 76.491115-34.420951 76.491115-76.491115L894.03295 205.906603C894.03295 163.836439 859.611999 129.414465 817.541835 129.414465L817.541835 129.414465z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M523.430842 356.472807C426.325223 240.082984 313.8168 234.749512 254.513136 242.122433l0-53.915957c24.249287-8.603959 41.738613-31.535227 41.738613-58.760289 0-34.56012-28.0171-62.582337-62.600757-62.582337-34.583656 0-62.600757 28.022217-62.600757 62.582337 0 27.224038 17.480116 50.15633 41.733497 58.760289L212.783733 810.482045c-74.855872 5.581112-132.084271 36.074613-132.084271 72.867588 0 40.74703 70.212108 73.785493 156.826791 73.785493 86.609567 0 156.826791-33.038464 156.826791-73.785493 0-38.054711-61.220317-69.368904-139.840932-73.353658L254.512113 632.241548c40.723493-23.448038 117.443829-47.945989 255.686357-37.467333C756.149091 613.412714 943.297468 459.529975 943.297468 459.529975S662.64858 523.298324 523.430842 356.472807zM233.650993 150.322657c-11.511171 0-20.86726-9.337669-20.86726-20.875446 0-11.529591 9.356089-20.86726 20.86726-20.86726 11.533684 0 20.862143 9.337669 20.862143 20.86726C254.513136 140.984988 245.184677 150.322657 233.650993 150.322657z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhong1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.552 40.64c257.344-1.792 470.592 208.832 473.536 467.776 3.008 260.864-206.336 472.256-470.464 474.88-260.736 2.688-474.56-205.44-475.84-463.104C37.632 253.376 245.504 42.432 511.552 40.64zM512.96 81.984C277.12 81.536 81.088 274.496 79.04 508.992c-2.048 237.376 193.664 434.688 431.552 434.88 236.544 0.192 433.28-193.472 433.6-426.816C944.448 277.44 751.104 82.432 512.96 81.984z"  ></path>' +
    '' +
    '<path d="M791.936 367.296c-6.208 7.808-14.4 20.608-24.896 31.168-95.36 95.936-191.808 190.784-286.4 287.488-27.968 28.608-47.808 28.032-74.944-1.28-50.56-54.4-104.448-105.6-156.544-158.592-10.24-10.432-26.88-23.68-13.312-38.336 17.088-18.56 30.72 0.832 42.304 12.16 43.52 42.688 87.744 84.8 129.28 129.344 27.584 29.696 47.552 26.688 74.752-1.408 86.016-89.024 174.208-176 261.824-263.424 10.432-10.432 19.712-24.96 37.952-20.096C789.952 346.368 794.304 352.768 791.936 367.296z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghuming" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M504.951467 511.979534c93.490278 0 169.279405-74.001411 169.279405-165.259858 0-91.275843-75.79015-165.247578-169.279405-165.247578-93.486184 0-169.287591 73.971735-169.279405 165.247578C335.671039 437.978123 411.465283 511.979534 504.951467 511.979534zM582.550823 567.078433 441.46555 567.078433c-120.766504 0-218.677465 95.563496-218.677465 213.450417l0 13.770632c0 48.182372 97.91096 48.228421 218.677465 48.228421l141.085272 0c120.754225 0 218.661092-1.780553 218.661092-48.228421l0-13.770632C801.211914 662.641929 703.313234 567.078433 582.550823 567.078433z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M206.868687 511.930182l270.828606-270.840242-0.085333-0.080162 16.717576-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L299.929859 512.020687l242.241939 242.241939c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.777778 12.88404-46.661818 0l-26.989899-26.989899 0.182303-0.166788L206.868687 511.930182 206.868687 511.930182zM470.833131 511.930182l270.833778-270.840242-0.08404-0.080162 16.716283-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L563.899475 512.020687 806.141414 754.262626c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.782949 12.88404-46.660525 0l-26.995071-26.989899 0.186182-0.166788L470.833131 511.930182 470.833131 511.930182zM470.833131 511.930182"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M815.804768 513.282586 544.976162 784.122828l0.085333 0.080162-16.717576 16.718869c-12.889212 12.889212-33.781657 12.889212-46.661818 0-12.889212-12.880162-12.889212-33.772606 0-46.663111l241.060202-241.064081L480.501657 270.951434c-12.88404-12.878869-12.88404-33.773899 0-46.661818 12.887919-12.88404 33.777778-12.88404 46.660525 0l26.989899 26.989899-0.182303 0.166788L815.804768 513.282586 815.804768 513.282586zM551.83903 513.282586 281.006545 784.122828l0.085333 0.080162-16.716283 16.718869c-12.889212 12.889212-33.782949 12.889212-46.661818 0-12.889212-12.880162-12.889212-33.772606 0-46.663111l241.060202-241.064081L216.53204 270.951434c-12.88404-12.878869-12.88404-33.773899 0-46.661818 12.887919-12.88404 33.782949-12.88404 46.660525 0l26.995071 26.989899-0.186182 0.166788L551.83903 513.282586 551.83903 513.282586zM551.83903 513.282586"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fuxuankuang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M429.233971 732.996277 231.956909 535.746844 311.141366 456.562387 429.233971 574.628386 712.858634 291.003723 792.043091 370.187157Z"  ></path>' +
    '' +
    '<path d="M63.222927 63.224973l0 896.030443 0.590448 0 895.780757 0L959.594131 63.224973 63.222927 63.224973zM895.129934 894.886387 127.688147 894.886387 127.688147 127.690194l767.440763 0L895.128911 894.886387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1009.737143 319.414857 449.316571 319.414857 449.316571 136.192 0 512 449.316571 887.734857 449.316571 704.585143 1009.737143 704.585143Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M398.647 954.199 179.278 680.186c0 0-11.085-102.239 87.737-59.17 57.017 25.586 77.367 79.298 77.367 79.298l2.043-417.39c0 0 58.947-87.901 110.234 0l0.934 264.254c0 0 63.75-86.742 138.747 6.064 0 0 56.248-94.518 135.27 4.577 0 0 56.03-109.298 112.278 9.485l0 331.75c0 0-3.256 25.862-48.862 55.145L398.647 954.199 398.647 954.199zM398.647 954.199"  ></path>' +
    '' +
    '<path d="M400.576 71C278.208 71 178.95 170.259 178.95 292.626c0 82.111 45.164 152.972 111.502 191.245l0-68.489c-34.299-30.386-56.357-74.228-56.357-123.636 0-91.43 74.166-165.602 165.597-165.602 91.433 0 165.602 74.171 165.602 165.602 0 48.415-21.175 91.595-54.265 121.871l0 70.086c66.121-38.379 111.174-109.13 111.174-191.077C622.203 170.259 522.944 71 400.576 71L400.576 71zM400.576 71"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhankai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.039627 64.119343c-247.1264 0-447.459055 200.335724-447.459055 447.462125 0 247.12947 200.333678 447.468265 447.459055 447.468265 247.12947 0 447.462125-200.338794 447.462125-447.468265C958.501752 264.456091 758.168074 64.119343 511.039627 64.119343zM673.753499 552.257889 554.431903 552.257889l0 106.880239c0 22.364357-19.425422 40.496319-43.392276 40.496319-23.960715 0-43.386136-18.131963-43.386136-40.496319L467.653491 552.257889l-119.327736 0c-22.465664 0-40.678468-18.210757-40.678468-40.675398 0-22.468734 18.212804-40.681538 40.678468-40.681538l119.327736 0L467.653491 335.157339c0-22.367427 19.425422-40.499389 43.386136-40.499389 23.966854 0 43.392276 18.131963 43.392276 40.499389l0 135.742591 119.322619 0c22.462594 0 40.675398 18.212804 40.675398 40.681538C714.429921 534.047132 696.216093 552.257889 673.753499 552.257889z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontzhizuobiaozhun47" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.371754 389.805984c-14.214746-30.28577-40.11872-45.295626-73.722048-45.693692-43.698245-0.399089-162.03542-0.13303-205.732641-0.13303-73.187883 0-146.370649 0-221.948975 0 11.948123-10.491958 22.309098-19.790742 33.072233-28.559453 41.704844-34.002418 36.129872-97.092315-19.929912-121.397884-32.140001-13.951757-62.953797-7.706519-89.649809 15.668865-48.882314 42.769083-97.495498 85.673242-145.978722 128.443347-4.782933 4.114714-9.162684 6.110161-15.677051 6.110161-29.884634-0.265036-59.769268 0-89.653903-0.265036-5.442966 0-7.834432 0.933255-7.834432 7.30436 0.132006 142.261051 0.132006 284.782022 0 427.301969 0 5.316076 1.331321 6.77531 6.771217 6.77531 31.079856-0.134053 62.294788 0 93.375667-0.134053 5.579065 0 10.492982 1.062192 15.278985 3.586688 22.181185 12.084223 44.3593 23.906479 66.675562 35.858696 4.115738 2.25946 8.236592 3.191692 13.019525 3.191692 78.765925 0 157.396773 0 235.892545 0 8.635681 0 16.741289-1.331321 24.974811-3.456728 41.173748-9.962909 56.050574-41.439808 53.92619-71.856561-1.063215-13.282514-5.974062-25.105794-13.947663-35.862789 27.501354-7.834432 49.148373-22.183232 58.976206-49.27731 9.962909-27.898397 2.25946-52.467979-17.798365-72.922846 39.45357-26.962072 48.878221-60.968583 26.170033-103.341646 41.170678 0 156.452261 0 196.698894 0 9.165754 0 18.201547-0.795109 27.099195-3.584642C922.191778 474.150974 945.831174 428.989401 927.371754 389.805984L927.371754 389.805984zM186.87669 744.849232c0 6.376221-1.591241 7.968485-7.835456 7.835456-16.470113-0.399089-33.203216-0.26606-49.806359 0-4.786003 0.13303-5.846148-1.194198-5.846148-5.978155 0.132006-121.80209 0.132006-243.60418 0-365.268124 0-4.915963 1.192152-6.374174 6.245238-6.247284 16.865109 0.265036 33.734312 0.265036 50.603515 0 5.447059-0.12689 6.639211 1.464351 6.639211 6.779404-0.132006 60.567447-0.132006 120.999818-0.132006 181.571359C186.744683 623.843274 186.481693 684.410722 186.87669 744.849232L186.87669 744.849232zM900.410706 414.909731c-1.727341 16.467043-17.536398 32.405037-36.134988 35.858696-5.0449 0.934279-10.086729 1.199315-15.139815 1.199315-60.169381 0.13303-195.371666 0.13303-255.547187-0.137123-6.376221 0-8.894577 1.596358-7.834432 7.971555 0.130983 0.928139 0 1.988284 0 3.054569 0 6.375198-1.723248 13.415544 0.398066 18.996656 2.391467 6.109138 11.162224 3.053546 16.737196 5.706979 6.241145 2.927679 12.485359 5.983271 17.531282 10.758018 19.523659 18.331507 15.274892 47.289026-8.632611 61.23362-10.892071 6.245238-22.714328 7.438413-34.802644 6.641257-5.842055-0.26606-8.762571 1.062192-7.568373 7.438413 0.132006 1.197268 0 2.661619 0 3.855818 0 6.371104-1.598404 13.281491 0.394996 18.99461 2.526543 6.641257 11.030218 2.791579 16.606213 5.441942 6.906294 3.586688 13.812587 6.640234 19.12457 12.486382 26.302039 28.294416 1.064238 59.905368-23.376407 64.949244-13.677511 2.927679-27.366278 0.933255-41.178865 1.597381-6.109138 0.26606-13.94357-2.657526-17.530258 1.066285-3.850701 3.712555-0.793062 11.685133-1.192152 17.664312 0 0.265036 0 0.397043 0 0.795109 0 11.955286 0 11.69025 11.286044 14.607696 9.830903 2.39249 18.86158 6.906294 25.504884 14.614859 8.634658 10.093892 13.680581 21.784142 8.634658 35.195593-5.846148 16.071024-17.801435 25.767873-34.402531 29.226648-4.383844 0.923022-9.03477 1.193175-13.681604 1.327228-75.315336 0-150.621463 0-225.933729 0.132006-4.386914 0-8.372691-0.927115-12.221346-3.188622-18.996656-11.425214-37.990243-22.844288-57.114812-34.001395-3.987824-2.25946-5.711072-4.652973-5.711072-9.43079 0.132006-126.851083 0.132006-253.704213 0-380.682185 0-3.983731 0.662079-7.0383 3.982708-9.960863 49.279357-43.169195 98.559736-86.735433 147.70504-130.035612 16.868179-14.872732 36.128849-17.271362 56.317657-9.695826 29.752628 11.160177 35.730783 43.830251 12.087293 65.085344-27.89635 25.100678-56.054667 49.810453-84.214007 74.646094-3.849678 3.584642-7.834432 7.043417-13.413498 12.220323 25.767873 0 49.010227 0 72.389704 0 120.601752 0 315.719638 0 436.32139 0 7.706519 0 15.143908 0.796132 22.580275 3.851725C891.240859 381.831358 902.264936 397.638369 900.410706 414.909731L900.410706 414.909731z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanxianguanli" viewBox="0 0 1088 1024">' +
    '' +
    '<path d="M550.6112 352.5696C522.2592 352.5696 494.1632 359.9296 469.3952 373.8816 431.6992 395.1296 404.7552 429.3696 393.4912 470.3936 382.2272 511.3536 388.0512 554.1696 409.7472 590.9696 438.8032 639.9936 492.8832 670.4576 550.9952 670.4576 579.4112 670.4576 607.4432 663.0336 632.2112 649.0816 710.0352 605.3056 736.7232 507.8976 691.8592 432.0576 662.8672 383.0336 608.7232 352.5696 550.6112 352.5696M550.9952 761.2736C459.7312 761.2736 374.7392 713.4016 329.1712 636.3456 294.9952 578.6176 285.9072 511.2896 303.5712 446.8416 321.2992 382.4576 363.6032 328.5696 422.8672 295.2256 461.7152 273.3376 505.9392 261.7536 550.6112 261.7536 641.8752 261.7536 726.8672 309.6256 772.4992 386.6176 843.0272 505.9136 800.9792 658.9376 678.8032 727.8016 639.8912 749.6896 595.6672 761.2736 550.9952 761.2736M539.0912 829.8816C600.2752 829.8816 658.0032 853.1136 699.4112 893.3056 735.5712 879.8656 769.2992 861.8816 800.1472 839.4176 787.7952 786.2336 796.6272 728.5696 825.6832 679.4816 856.6592 627.0656 906.8992 589.7536 964.1152 575.2896 967.7632 553.6576 969.5552 532.3456 969.5552 511.5456 969.5552 495.9296 968.5952 480.3136 966.6112 464.3136 912.4032 448.4416 864.9152 411.9616 835.4752 362.1696 804.4352 309.7536 796.4352 248.6976 812.1792 193.0816 782.5472 169.7856 750.3552 150.8416 715.9232 136.3776 674.9632 172.7936 619.7952 193.7856 562.3232 193.7856 500.8832 193.7856 443.0272 170.4256 401.5552 129.9136 364.2432 143.8016 329.4912 162.6176 297.7472 186.1696 309.9072 239.2896 301.0752 296.7616 272.1472 345.5936 241.8112 396.8576 192.7872 433.9136 136.9152 449.0816 133.4592 470.2016 131.7312 491.1296 131.7312 511.5456 131.7312 528.1216 132.8192 545.0176 134.9952 561.9136 187.9872 578.2336 233.2992 613.8176 262.3552 662.9696 292.5632 713.9776 300.9472 773.6896 286.6752 828.2816 316.7552 852.1536 349.9712 871.7376 386.0032 886.7776 426.8992 850.2336 481.0432 829.8816 539.0912 829.8816M684.6272 991.5456C669.8432 991.5456 655.6352 984.6976 646.7392 972.5376 622.9312 940.0896 582.6752 920.6976 539.0912 920.6976 498.0672 920.6976 459.1552 938.4896 434.9632 968.2496 422.6752 983.4176 401.8752 989.3696 383.1232 983.0336 314.4512 959.6736 253.1392 923.5136 200.7872 875.5776 186.3232 862.3936 182.0352 841.7856 190.0352 824.1216 206.3552 788.0256 203.2832 744.7616 181.7152 708.3456 161.1712 673.6576 125.9072 649.5936 87.3152 644.1536 67.7952 641.3376 52.1792 626.8096 48.3392 607.9296 41.9392 575.7376 38.6752 543.3536 38.6752 511.5456 38.6752 475.1296 43.0912 437.6896 51.7952 400.2496 56.2112 381.3056 72.5312 367.2256 92.3712 365.1776 132.8192 361.0816 169.8752 336.8256 191.5072 300.2176 212.3072 265.1456 215.8272 223.0336 200.9792 187.5136 193.4912 169.5936 198.4832 148.9856 213.3952 136.2496 268.6272 88.9536 332.4352 54.3296 402.9632 33.5296 422.0992 27.8336 442.8352 34.7456 454.4192 50.6816 478.2272 83.4496 518.5472 102.9696 562.3232 102.9696 603.6672 102.9696 642.7072 85.0496 666.8352 54.9696 679.1232 39.6736 699.9872 33.7216 718.8032 40.0576 785.3632 62.6496 845.8432 98.2976 898.5152 145.9136 913.4272 159.3536 917.6512 180.6016 909.0112 198.5216 891.3472 235.1936 893.9712 279.4176 916.0512 316.7296 937.2352 352.5056 973.5232 376.6976 1013.2032 381.3696 1033.2992 383.8016 1049.4912 398.5856 1053.3312 417.9776 1059.5392 449.7216 1062.6752 481.2096 1062.6752 511.5456 1062.6752 548.4736 1058.0032 586.6176 1048.9152 624.8256 1044.3712 644.0256 1027.6672 658.1696 1007.5712 659.8336 966.2272 663.2896 928.3392 687.6096 906.2592 724.8576 885.3952 760.1856 881.9392 802.5536 897.0432 838.1376 904.6592 856.2496 899.6032 877.1136 884.3712 889.9136 829.9712 935.6736 767.2512 969.2096 698.0672 989.6256 693.5872 990.9696 689.1072 991.5456 684.6272 991.5456"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 973.824c-254.976 0-461.824-206.848-461.824-461.824 0-254.976 206.848-461.824 461.824-461.824 254.976 0 461.824 206.848 461.824 461.824s-206.848 461.824-461.824 461.824z m0-865.792c-223.232 0-403.968 180.736-403.968 403.968 0 223.232 180.736 403.968 403.968 403.968 223.232 0 403.968-180.736 403.968-403.968 0-223.232-180.736-403.968-403.968-403.968z m202.24 432.64h-305.664l118.784 118.784c11.264 11.264 11.264 29.696 0 40.96s-29.696 11.264-40.96 0l-163.328-163.328c-7.168-7.168-9.216-16.384-7.68-25.6-1.536-8.704 0.512-18.432 7.68-25.6L486.4 322.56c11.264-11.264 29.696-11.264 40.96 0s11.264 29.696 0 40.96l-118.784 118.784h305.664c15.872 0 28.672 12.8 28.672 28.672 0 16.896-12.8 29.696-28.672 29.696z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouqi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 92c234 0 420 186 420 420s-186 420-420 420-420-186-420-420 186-420 420-420M512 32c-264 0-480 216-480 480s216 480 480 480 480-216 480-480-216-480-480-480z" fill="#666666" ></path>' +
    '' +
    '<path d="M272 482h480v60h-480z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.881 249.91c-122.036-122.092-319.94-122.092-442.033 0s-122.093 319.997 0 442.033c56.558 56.574 134.7 91.567 221.017 91.567 86.316 0 164.458-34.994 221.016-91.567 56.575-56.558 91.568-134.701 91.568-221.017 0-86.316-34.994-164.458-91.567-221.016zM181.8 759.992c-74.010-73.991-119.787-176.22-119.787-289.14 0-225.802 183.050-408.852 408.852-408.852 225.803 0 408.852 183.050 408.852 408.852 0 112.92-45.778 215.149-119.787 289.139-73.985 73.966-176.183 119.713-289.065 119.713-112.883 0-215.080-45.747-289.065-119.713zM945.517 945.579c-10.099 10.115-24.058 16.372-39.48 16.372s-29.381-6.257-39.479-16.371l-78.903-78.959c-10.097-10.097-16.342-24.045-16.342-39.452 0-30.814 24.98-55.792 55.792-55.792 15.406 0 29.355 6.245 39.452 16.341l78.958 78.903c10.142 10.087 16.418 24.050 16.418 39.479s-6.277 29.393-16.416 39.477z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chalv-kaisuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M788.396 430.152H328.351l-46.206-74.667c-59.087-95.482-29.478-221.235 66.004-280.322 46.043-28.492 100.653-37.298 153.769-24.791 53.116 12.506 98.06 44.751 126.553 90.794l82.535 133.371 34.014-21.049-82.535-133.371C628.37 64.988 574.602 26.391 511.086 11.436 447.567-3.52 382.228 7.034 327.1 41.149c-55.129 34.116-93.726 87.884-108.681 151.399-14.955 63.516-4.403 128.856 29.712 183.985l33.18 53.618H229.82c-70.595 0-128.028 57.433-128.028 128.028v333.316c0 70.595 57.433 128.028 128.028 128.028h558.577c70.595 0 128.028-57.434 128.028-128.028V558.18c0-70.595-57.434-128.028-128.029-128.028z m88.029 461.344c0 48.539-39.489 88.028-88.028 88.028H229.82c-48.539 0-88.028-39.489-88.028-88.028V558.18c0-48.539 39.489-88.028 88.028-88.028h558.577c48.539 0 88.028 39.489 88.028 88.028v333.316z"  ></path>' +
    '' +
    '<path d="M350.55 530.627h322.9v40h-322.9z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuanzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M846.486069 1023.987371H177.489014A175.441064 175.441064 0 0 1 0 851.003847V173.064077A175.441064 175.441064 0 0 1 177.489014 0.012288h668.997055A175.475197 175.475197 0 0 1 1023.975083 173.064077v677.93977A175.475197 175.475197 0 0 1 846.486069 1023.987371zM177.489014 75.103794a100.144763 100.144763 0 0 0-101.953785 97.994415V850.935582A100.110631 100.110631 0 0 0 177.489014 948.895865h668.997055a100.110631 100.110631 0 0 0 101.885521-97.926151V173.064077A100.110631 100.110631 0 0 0 846.486069 75.103794H177.489014z m575.132672 158.272415l-306.134417 368.90409L256.915348 457.387825l-88.198387 108.404829 188.547946 144.073294-0.27306 0.307192 102.738833 80.58684L855.258122 314.031313l-102.738833-80.825766z" fill="#ED7F7F" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weixuanzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M46.545455 186.647273v650.705454C46.545455 914.618182 109.381818 977.454545 186.647273 977.454545h650.705454c77.265455 0 140.101818-62.836364 140.101818-140.101818V186.647273C977.454545 109.381818 914.618182 46.545455 837.352727 46.545455H186.647273A140.241455 140.241455 0 0 0 46.545455 186.647273z m-46.545455 0C0 83.549091 83.781818 0 186.647273 0h650.705454C940.450909 0 1024 83.781818 1024 186.647273v650.705454c0 103.098182-83.781818 186.647273-186.647273 186.647273H186.647273C83.549091 1024 0 940.218182 0 837.352727V186.647273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M141.211 475.877v72.247h334.666v334.666h72.247v-334.666h334.666v-72.247h-334.666v-334.666h-72.247v334.666h-334.666z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)