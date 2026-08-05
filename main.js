const rawData = [
  {"sale_id":6,"SaleDateSanitized":"INVALID","customer_name":"Michael Adams","PorscheModelSanitized":"718 Cayman","ModelYearSanitized":2022,"SalesPriceSanitized":79500,"VehicleMileageSanitized":9800,"PayMethodSanitized":"Credit Card","CitySanitized":"Boston","StateSanitized":"MA","salesperson":"kevin","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":7,"SaleDateSanitized":"2024-03-14","customer_name":"SOPHIA Miller","PorscheModelSanitized":"911 Turbo S","ModelYearSanitized":2024,"SalesPriceSanitized":235000,"VehicleMileageSanitized":1200,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Seattle","StateSanitized":"WA","salesperson":"AMANDA scott","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":8,"SaleDateSanitized":"2024-04-18","customer_name":"Daniel-Jones","PorscheModelSanitized":"Cayenne Coupe","ModelYearSanitized":2023,"SalesPriceSanitized":112750,"VehicleMileageSanitized":6400,"PayMethodSanitized":"Financing","CitySanitized":"Austin","StateSanitized":"TX","salesperson":"Brian Hall","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":9,"SaleDateSanitized":"INVALID","customer_name":"Olivia Brown","PorscheModelSanitized":"Macan S","ModelYearSanitized":2021,"SalesPriceSanitized":68900,"VehicleMileageSanitized":28,"PayMethodSanitized":"Cash","CitySanitized":"Denver","StateSanitized":"CO","salesperson":"jessica","DeliveryStatusSanitized":"Pending"},
  {"sale_id":10,"SaleDateSanitized":"2024-05-22","customer_name":"Ethan Wilson","PorscheModelSanitized":"Taycan 4S","ModelYearSanitized":2024,"SalesPriceSanitized":121000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Los Angeles","StateSanitized":"CA","salesperson":"Thomas King","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":11,"SaleDateSanitized":"2024-06-01","customer_name":"Ava Taylor","PorscheModelSanitized":"Panamera 4","ModelYearSanitized":2022,"SalesPriceSanitized":98500,"VehicleMileageSanitized":15400,"PayMethodSanitized":"Lease","CitySanitized":"Miami","StateSanitized":"FL","salesperson":"NANCY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":12,"SaleDateSanitized":"2024-06-15","customer_name":"Matthew Thomas","PorscheModelSanitized":"911 Carrera S","ModelYearSanitized":2023,"SalesPriceSanitized":138000,"VehicleMileageSanitized":4200,"PayMethodSanitized":"Wire Transfer","CitySanitized":"New York","StateSanitized":"NY","salesperson":"Chris Wright","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":13,"SaleDateSanitized":"2024-07-02","customer_name":"Isabella White","PorscheModelSanitized":"Cayenne E-Hybrid","ModelYearSanitized":2024,"SalesPriceSanitized":104800,"VehicleMileageSanitized":100,"PayMethodSanitized":"Financing","CitySanitized":"San Diego","StateSanitized":"CA","salesperson":"KAREN","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":14,"SaleDateSanitized":"2024-07-20","customer_name":"Lucas Harris","PorscheModelSanitized":"718 Boxster","ModelYearSanitized":2020,"SalesPriceSanitized":62000,"VehicleMileageSanitized":22000,"PayMethodSanitized":"Credit Card","CitySanitized":"Chicago","StateSanitized":"IL","salesperson":"David Martin","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":15,"SaleDateSanitized":"2024-08-05","customer_name":"Mia Martin","PorscheModelSanitized":"Macan GTS","ModelYearSanitized":2024,"SalesPriceSanitized":89000,"VehicleMileageSanitized":500,"PayMethodSanitized":"Cash","CitySanitized":"Phoenix","StateSanitized":"AZ","salesperson":"SARAH","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":16,"SaleDateSanitized":"2024-08-18","customer_name":"Benjamin Clark","PorscheModelSanitized":"Taycan Turbo","ModelYearSanitized":2023,"SalesPriceSanitized":160000,"VehicleMileageSanitized":3100,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Dallas","StateSanitized":"TX","salesperson":"James Lee","DeliveryStatusSanitized":"Pending"},
  {"sale_id":17,"SaleDateSanitized":"2024-09-01","customer_name":"Charlotte Lewis","PorscheModelSanitized":"911 GT3","ModelYearSanitized":2024,"SalesPriceSanitized":225000,"VehicleMileageSanitized":50,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Las Vegas","StateSanitized":"NV","salesperson":"MICHELLE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":18,"SaleDateSanitized":"2024-09-12","customer_name":"Henry Walker","PorscheModelSanitized":"Panamera Turbo S","ModelYearSanitized":2022,"SalesPriceSanitized":185000,"VehicleMileageSanitized":11200,"PayMethodSanitized":"Financing","CitySanitized":"San Jose","StateSanitized":"CA","salesperson":"Robert Perez","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":19,"SaleDateSanitized":"2024-09-25","customer_name":"Amelia Hall","PorscheModelSanitized":"Cayenne Turbo GT","ModelYearSanitized":2024,"SalesPriceSanitized":198000,"VehicleMileageSanitized":800,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Houston","StateSanitized":"TX","salesperson":"LAURA","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":20,"SaleDateSanitized":"2024-10-04","customer_name":"Alexander Allen","PorscheModelSanitized":"911 Carrera Cabriolet","ModelYearSanitized":2023,"SalesPriceSanitized":142000,"VehicleMileageSanitized":5300,"PayMethodSanitized":"Debit Card","CitySanitized":"Atlanta","StateSanitized":"GA","salesperson":"Daniel Turner","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":21,"SaleDateSanitized":"2024-10-15","customer_name":"Harper Young","PorscheModelSanitized":"Macan","ModelYearSanitized":2021,"SalesPriceSanitized":57500,"VehicleMileageSanitized":18500,"PayMethodSanitized":"Financing","CitySanitized":"Orlando","StateSanitized":"FL","salesperson":"EMILY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":22,"SaleDateSanitized":"2024-11-01","customer_name":"Sebastian Hernandez","PorscheModelSanitized":"718 Spyder RS","ModelYearSanitized":2024,"SalesPriceSanitized":162000,"VehicleMileageSanitized":120,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Portland","StateSanitized":"OR","salesperson":"Matthew Parker","DeliveryStatusSanitized":"Pending"},
  {"sale_id":23,"SaleDateSanitized":"2024-11-10","customer_name":"Evelyn King","PorscheModelSanitized":"Taycan Cross Turismo","ModelYearSanitized":2023,"SalesPriceSanitized":115000,"VehicleMileageSanitized":7400,"PayMethodSanitized":"Lease","CitySanitized":"Charlotte","StateSanitized":"NC","salesperson":"AMY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":24,"SaleDateSanitized":"2024-11-22","customer_name":"Jack Wright","PorscheModelSanitized":"Cayenne S","ModelYearSanitized":2024,"SalesPriceSanitized":108000,"VehicleMileageSanitized":300,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Nashville","StateSanitized":"TN","salesperson":"Andrew Evans","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":25,"SaleDateSanitized":"2024-12-03","customer_name":"Abigail Lopez","PorscheModelSanitized":"911 Targa 4S","ModelYearSanitized":2024,"SalesPriceSanitized":171000,"VehicleMileageSanitized":450,"PayMethodSanitized":"Financing","CitySanitized":"Minneapolis","StateSanitized":"MN","salesperson":"REBECCA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":26,"SaleDateSanitized":"2024-12-14","customer_name":"Owen Hill","PorscheModelSanitized":"Panamera","ModelYearSanitized":2020,"SalesPriceSanitized":88000,"VehicleMileageSanitized":29000,"PayMethodSanitized":"Cash","CitySanitized":"Philadelphia","StateSanitized":"PA","salesperson":"Joshua Edwards","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":27,"SaleDateSanitized":"2025-01-05","customer_name":"Emily Scott","PorscheModelSanitized":"Macan Electric","ModelYearSanitized":2025,"SalesPriceSanitized":80500,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"San Antonio","StateSanitized":"TX","salesperson":"KELLY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":28,"SaleDateSanitized":"2025-01-18","customer_name":"Jackson Green","PorscheModelSanitized":"911 Dakar","ModelYearSanitized":2024,"SalesPriceSanitized":222000,"VehicleMileageSanitized":210,"PayMethodSanitized":"Crypto Payment","CitySanitized":"Salt Lake City","StateSanitized":"UT","salesperson":"Ryan Collins","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":29,"SaleDateSanitized":"2025-02-02","customer_name":"Ella Adams","PorscheModelSanitized":"Taycan GTS","ModelYearSanitized":2023,"SalesPriceSanitized":139000,"VehicleMileageSanitized":4800,"PayMethodSanitized":"ACH Payment","CitySanitized":"Raleigh","StateSanitized":"NC","salesperson":"LAUREN","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":30,"SaleDateSanitized":"2025-02-14","customer_name":"Aiden Baker","PorscheModelSanitized":"Cayenne","ModelYearSanitized":2022,"SalesPriceSanitized":82000,"VehicleMileageSanitized":14200,"PayMethodSanitized":"Financing","CitySanitized":"Detroit","StateSanitized":"MI","salesperson":"Jacob Stewart","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":31,"SaleDateSanitized":"2025-03-01","customer_name":"Chloe Gonzalez","PorscheModelSanitized":"718 Cayman GT4 RS","ModelYearSanitized":2024,"SalesPriceSanitized":163000,"VehicleMileageSanitized":600,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Columbus","StateSanitized":"OH","salesperson":"MEGAN","DeliveryStatusSanitized":"Pending"},
  {"sale_id":32,"SaleDateSanitized":"2025-03-12","customer_name":"Samuel Nelson","PorscheModelSanitized":"911 Carrera GTS","ModelYearSanitized":2025,"SalesPriceSanitized":158000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Financing","CitySanitized":"Indianapolis","StateSanitized":"IN","salesperson":"Nicholas Morris","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":33,"SaleDateSanitized":"2025-03-25","customer_name":"Grace Carter","PorscheModelSanitized":"Panamera 4 E-Hybrid","ModelYearSanitized":2023,"SalesPriceSanitized":110000,"VehicleMileageSanitized":6100,"PayMethodSanitized":"Lease","CitySanitized":"Fort Worth","StateSanitized":"TX","salesperson":"HANNAH","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":34,"SaleDateSanitized":"2025-04-05","customer_name":"Wyatt Mitchell","PorscheModelSanitized":"Macan T","ModelYearSanitized":2024,"SalesPriceSanitized":68500,"VehicleMileageSanitized":1100,"PayMethodSanitized":"Credit Card","CitySanitized":"Jacksonville","StateSanitized":"FL","salesperson":"Tyler Rogers","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":35,"SaleDateSanitized":"2025-04-18","customer_name":"Victoria Perez","PorscheModelSanitized":"Taycan Turbo S","ModelYearSanitized":2022,"SalesPriceSanitized":175000,"VehicleMileageSanitized":12500,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Tampa","StateSanitized":"FL","salesperson":"STEPHANIE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":36,"SaleDateSanitized":"2025-05-02","customer_name":"Luke Roberts","PorscheModelSanitized":"911 Carrera","ModelYearSanitized":2021,"SalesPriceSanitized":114000,"VehicleMileageSanitized":16800,"PayMethodSanitized":"Financing","CitySanitized":"Sacramento","StateSanitized":"CA","salesperson":"Brandon Reed","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":37,"SaleDateSanitized":"2025-05-15","customer_name":"Hannah Turner","PorscheModelSanitized":"Cayenne Coupe","ModelYearSanitized":2025,"SalesPriceSanitized":125000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Cleveland","StateSanitized":"OH","salesperson":"RACHEL","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":38,"SaleDateSanitized":"2025-06-01","customer_name":"Gabriel Phillips","PorscheModelSanitized":"718 Cayman","ModelYearSanitized":2023,"SalesPriceSanitized":72000,"VehicleMileageSanitized":5200,"PayMethodSanitized":"Cash","CitySanitized":"Milwaukee","StateSanitized":"WI","salesperson":"Austin Cook","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":39,"SaleDateSanitized":"2025-06-12","customer_name":"Zoe Campbell","PorscheModelSanitized":"Taycan","ModelYearSanitized":2021,"SalesPriceSanitized":86000,"VehicleMileageSanitized":19400,"PayMethodSanitized":"Lease","CitySanitized":"Kansas City","StateSanitized":"MO","salesperson":"CHRISTINA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":40,"SaleDateSanitized":"2025-06-25","customer_name":"Anthony Parker","PorscheModelSanitized":"Panamera 4S","ModelYearSanitized":2024,"SalesPriceSanitized":118000,"VehicleMileageSanitized":900,"PayMethodSanitized":"Financing","CitySanitized":"Omaha","StateSanitized":"NE","salesperson":"Justin Morgan","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":41,"SaleDateSanitized":"2025-07-08","customer_name":"Nora Evans","PorscheModelSanitized":"911 Turbo","ModelYearSanitized":2022,"SalesPriceSanitized":192000,"VehicleMileageSanitized":8800,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Albuquerque","StateSanitized":"NM","salesperson":"SAMANTHA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":42,"SaleDateSanitized":"2025-07-20","customer_name":"Isaac Edwards","PorscheModelSanitized":"Macan S","ModelYearSanitized":2025,"SalesPriceSanitized":74500,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Tucson","StateSanitized":"AZ","salesperson":"Ethan Bell","DeliveryStatusSanitized":"Pending"},
  {"sale_id":43,"SaleDateSanitized":"2025-08-01","customer_name":"Lily Collins","PorscheModelSanitized":"Panamera Turbo","ModelYearSanitized":2021,"SalesPriceSanitized":155000,"VehicleMileageSanitized":21000,"PayMethodSanitized":"Financing","CitySanitized":"Fresno","StateSanitized":"CA","salesperson":"NICOLE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":44,"SaleDateSanitized":"2025-08-14","customer_name":"Grayson Stewart","PorscheModelSanitized":"911 GT3 RS","ModelYearSanitized":2024,"SalesPriceSanitized":275000,"VehicleMileageSanitized":150,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Virginia Beach","StateSanitized":"VA","salesperson":"Alexander Murphy","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":45,"SaleDateSanitized":"2025-08-28","customer_name":"Lillian Sanchez","PorscheModelSanitized":"Cayenne E-Hybrid","ModelYearSanitized":2025,"SalesPriceSanitized":109000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Lease","CitySanitized":"Colorado Springs","StateSanitized":"CO","salesperson":"ELIZABETH","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":46,"SaleDateSanitized":"2025-09-09","customer_name":"Julian Morris","PorscheModelSanitized":"718 Boxster","ModelYearSanitized":2023,"SalesPriceSanitized":69000,"VehicleMileageSanitized":4100,"PayMethodSanitized":"Credit Card","CitySanitized":"Arlington","StateSanitized":"TX","salesperson":"Noah Bailey","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":47,"SaleDateSanitized":"2025-09-22","customer_name":"Addison Rogers","PorscheModelSanitized":"911 Targa 4","ModelYearSanitized":2023,"SalesPriceSanitized":151000,"VehicleMileageSanitized":3900,"PayMethodSanitized":"Financing","CitySanitized":"Bakersfield","StateSanitized":"CA","salesperson":"HEATHER","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":48,"SaleDateSanitized":"2025-10-05","customer_name":"Christopher Reed","PorscheModelSanitized":"Macan GTS","ModelYearSanitized":2025,"SalesPriceSanitized":92500,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Mesa","StateSanitized":"AZ","salesperson":"Liam Rivera","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":49,"SaleDateSanitized":"2025-10-18","customer_name":"Aubrey Cook","PorscheModelSanitized":"Taycan 4S","ModelYearSanitized":2022,"SalesPriceSanitized":110000,"VehicleMileageSanitized":13800,"PayMethodSanitized":"ACH Payment","CitySanitized":"Long Beach","StateSanitized":"CA","salesperson":"MELISSA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":50,"SaleDateSanitized":"2025-11-01","customer_name":"Jaxon Morgan","PorscheModelSanitized":"Cayenne Turbo","ModelYearSanitized":2021,"SalesPriceSanitized":148000,"VehicleMileageSanitized":24500,"PayMethodSanitized":"Financing","CitySanitized":"Oakland","StateSanitized":"CA","salesperson":"Mason Cooper","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":51,"SaleDateSanitized":"2025-11-12","customer_name":"Brooklyn Bell","PorscheModelSanitized":"Panamera 4","ModelYearSanitized":2025,"SalesPriceSanitized":106000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Lease","CitySanitized":"Tulsa","StateSanitized":"OK","salesperson":"AMBER","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":52,"SaleDateSanitized":"2025-11-25","customer_name":"Levi Murphy","PorscheModelSanitized":"911 Carrera S","ModelYearSanitized":2024,"SalesPriceSanitized":145000,"VehicleMileageSanitized":750,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Wichita","StateSanitized":"KS","salesperson":"Logan Howard","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":53,"SaleDateSanitized":"2025-12-08","customer_name":"Paisley Bailey","PorscheModelSanitized":"718 Boxster GTS","ModelYearSanitized":2024,"SalesPriceSanitized":95000,"VehicleMileageSanitized":800,"PayMethodSanitized":"Financing","CitySanitized":"New Orleans","StateSanitized":"LA","salesperson":"DANIELLE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":54,"SaleDateSanitized":"2025-12-20","customer_name":"Aaron Rivera","PorscheModelSanitized":"Macan","ModelYearSanitized":2023,"SalesPriceSanitized":63000,"VehicleMileageSanitized":6200,"PayMethodSanitized":"Cash","CitySanitized":"Honolulu","StateSanitized":"HI","salesperson":"Lucas Ward","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":55,"SaleDateSanitized":"2026-01-04","customer_name":"Skylar Cooper","PorscheModelSanitized":"Taycan Cross Turismo","ModelYearSanitized":2025,"SalesPriceSanitized":122000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Anaheim","StateSanitized":"CA","salesperson":"MICHELLE","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":56,"SaleDateSanitized":"2026-01-15","customer_name":"Oliver Howard","PorscheModelSanitized":"Cayenne S","ModelYearSanitized":2023,"SalesPriceSanitized":99000,"VehicleMileageSanitized":7800,"PayMethodSanitized":"Financing","CitySanitized":"Henderson","StateSanitized":"NV","salesperson":"Jackson Cox","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":57,"SaleDateSanitized":"2026-01-28","customer_name":"Genesis Ward","PorscheModelSanitized":"911 Carrera Cabriolet","ModelYearSanitized":2025,"SalesPriceSanitized":149000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Lexington","StateSanitized":"KY","salesperson":"KIMBERLY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":58,"SaleDateSanitized":"2026-02-08","customer_name":"Mateo Cox","PorscheModelSanitized":"Panamera","ModelYearSanitized":2022,"SalesPriceSanitized":92000,"VehicleMileageSanitized":16200,"PayMethodSanitized":"Lease","CitySanitized":"Riverside","StateSanitized":"CA","salesperson":"Aiden Diaz","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":59,"SaleDateSanitized":"2026-02-20","customer_name":"Madelyn Diaz","PorscheModelSanitized":"718 Cayman S","ModelYearSanitized":2024,"SalesPriceSanitized":84000,"VehicleMileageSanitized":950,"PayMethodSanitized":"Credit Card","CitySanitized":"Corpus Christi","StateSanitized":"TX","salesperson":"AMY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":60,"SaleDateSanitized":"2026-03-05","customer_name":"Elijah Richardson","PorscheModelSanitized":"Macan T","ModelYearSanitized":2025,"SalesPriceSanitized":71500,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"St. Louis","StateSanitized":"MO","salesperson":"Samuel James","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":61,"SaleDateSanitized":"2026-03-18","customer_name":"Savannah James","PorscheModelSanitized":"Taycan GTS","ModelYearSanitized":2024,"SalesPriceSanitized":143000,"VehicleMileageSanitized":1100,"PayMethodSanitized":"Financing","CitySanitized":"Pittsburgh","StateSanitized":"PA","salesperson":"ANGELA","DeliveryStatusSanitized":"Pending"},
  {"sale_id":62,"SaleDateSanitized":"2026-03-30","customer_name":"Daniel Watson","PorscheModelSanitized":"911 Turbo S","ModelYearSanitized":2025,"SalesPriceSanitized":242000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Cincinnati","StateSanitized":"OH","salesperson":"David Brooks","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":63,"SaleDateSanitized":"2026-04-12","customer_name":"Audrey Brooks","PorscheModelSanitized":"Cayenne Turbo GT","ModelYearSanitized":2023,"SalesPriceSanitized":189000,"VehicleMileageSanitized":5800,"PayMethodSanitized":"Financing","CitySanitized":"Anchorage","StateSanitized":"AK","salesperson":"BRENDA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":64,"SaleDateSanitized":"2026-04-25","customer_name":"Joseph Kelly","PorscheModelSanitized":"Macan Electric","ModelYearSanitized":2026,"SalesPriceSanitized":83000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Plano","StateSanitized":"TX","salesperson":"Joseph Sanders","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":65,"SaleDateSanitized":"2026-05-08","customer_name":"Bella Sanders","PorscheModelSanitized":"Panamera 4 E-Hybrid","ModelYearSanitized":2024,"SalesPriceSanitized":115000,"VehicleMileageSanitized":1400,"PayMethodSanitized":"Lease","CitySanitized":"Newark","StateSanitized":"NJ","salesperson":"EMMA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":66,"SaleDateSanitized":"2026-05-20","customer_name":"David Price","PorscheModelSanitized":"718 Spyder RS","ModelYearSanitized":2025,"SalesPriceSanitized":168000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Greensboro","StateSanitized":"NC","salesperson":"John Bennett","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":67,"SaleDateSanitized":"2026-06-02","customer_name":"Claire Bennett","PorscheModelSanitized":"911 GT3","ModelYearSanitized":2023,"SalesPriceSanitized":215000,"VehicleMileageSanitized":3200,"PayMethodSanitized":"Cash","CitySanitized":"Lincoln","StateSanitized":"NE","salesperson":"PAMELA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":68,"SaleDateSanitized":"2026-06-15","customer_name":"Carter Wood","PorscheModelSanitized":"Taycan Turbo","ModelYearSanitized":2024,"SalesPriceSanitized":168000,"VehicleMileageSanitized":850,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Jersey City","StateSanitized":"NJ","salesperson":"Dylan Barnes","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":69,"SaleDateSanitized":"2026-06-28","customer_name":"Skylar Barnes","PorscheModelSanitized":"Cayenne Coupe","ModelYearSanitized":2022,"SalesPriceSanitized":102000,"VehicleMileageSanitized":15100,"PayMethodSanitized":"Financing","CitySanitized":"Chandler","StateSanitized":"AZ","salesperson":"NICOLE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":70,"SaleDateSanitized":"2026-07-10","customer_name":"Wyatt Ross","PorscheModelSanitized":"Macan GTS","ModelYearSanitized":2023,"SalesPriceSanitized":84000,"VehicleMileageSanitized":8300,"PayMethodSanitized":"Credit Card","CitySanitized":"Reno","StateSanitized":"NV","salesperson":"Luke Henderson","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":71,"SaleDateSanitized":"2026-07-22","customer_name":"Paisley Henderson","PorscheModelSanitized":"911 Targa 4S","ModelYearSanitized":2025,"SalesPriceSanitized":178000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Buffalo","StateSanitized":"NY","salesperson":"CHRISTINA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":72,"SaleDateSanitized":"2026-08-04","customer_name":"Julian Coleman","PorscheModelSanitized":"Panamera Turbo S","ModelYearSanitized":2024,"SalesPriceSanitized":195000,"VehicleMileageSanitized":650,"PayMethodSanitized":"Financing","CitySanitized":"Durham","StateSanitized":"NC","salesperson":"Gabriel Jenkins","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":73,"SaleDateSanitized":"2026-08-16","customer_name":"Everly Jenkins","PorscheModelSanitized":"718 Cayman GT4 RS","ModelYearSanitized":2025,"SalesPriceSanitized":169000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Crypto Payment","CitySanitized":"Laredo","StateSanitized":"TX","salesperson":"SAMANTHA","DeliveryStatusSanitized":"Pending"},
  {"sale_id":74,"SaleDateSanitized":"2026-08-28","customer_name":"Grayson Perry","PorscheModelSanitized":"Taycan 4S","ModelYearSanitized":2023,"SalesPriceSanitized":116000,"VehicleMileageSanitized":6900,"PayMethodSanitized":"Lease","CitySanitized":"Madison","StateSanitized":"WI","salesperson":"Anthony Powell","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":75,"SaleDateSanitized":"2026-09-09","customer_name":"Nova Powell","PorscheModelSanitized":"911 Carrera GTS","ModelYearSanitized":2024,"SalesPriceSanitized":152000,"VehicleMileageSanitized":1300,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Lubbock","StateSanitized":"TX","salesperson":"RACHEL","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":76,"SaleDateSanitized":"2026-09-21","customer_name":"Leo Long","PorscheModelSanitized":"Cayenne E-Hybrid","ModelYearSanitized":2022,"SalesPriceSanitized":94000,"VehicleMileageSanitized":17600,"PayMethodSanitized":"Financing","CitySanitized":"Toledo","StateSanitized":"OH","salesperson":"Isaac Patterson","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":77,"SaleDateSanitized":"2026-10-03","customer_name":"Maya Patterson","PorscheModelSanitized":"Macan T","ModelYearSanitized":2023,"SalesPriceSanitized":64500,"VehicleMileageSanitized":9100,"PayMethodSanitized":"Cash","CitySanitized":"Irvine","StateSanitized":"CA","salesperson":"HEATHER","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":78,"SaleDateSanitized":"2026-10-15","customer_name":"Jace Hughes","PorscheModelSanitized":"Panamera 4","ModelYearSanitized":2024,"SalesPriceSanitized":102000,"VehicleMileageSanitized":1800,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Garland","StateSanitized":"TX","salesperson":"Grayson Flores","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":79,"SaleDateSanitized":"2026-10-28","customer_name":"Elena Flores","PorscheModelSanitized":"718 Boxster GTS","ModelYearSanitized":2025,"SalesPriceSanitized":99000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Credit Card","CitySanitized":"Irving","StateSanitized":"TX","salesperson":"MELISSA","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":80,"SaleDateSanitized":"2026-11-09","customer_name":"Mateo Washington","PorscheModelSanitized":"Taycan GTS","ModelYearSanitized":2025,"SalesPriceSanitized":147000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Financing","CitySanitized":"Chesapeake","StateSanitized":"VA","salesperson":"Christopher Butler","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":81,"SaleDateSanitized":"2026-11-21","customer_name":"Ariana Butler","PorscheModelSanitized":"911 Dakar","ModelYearSanitized":2025,"SalesPriceSanitized":230000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Scottsdale","StateSanitized":"AZ","salesperson":"DANIELLE","DeliveryStatusSanitized":"In Transit"},
  {"sale_id":82,"SaleDateSanitized":"2026-12-03","customer_name":"Ezra Simmons","PorscheModelSanitized":"Cayenne Coupe","ModelYearSanitized":2024,"SalesPriceSanitized":119000,"VehicleMileageSanitized":2200,"PayMethodSanitized":"Financing","CitySanitized":"Norfolk","StateSanitized":"VA","salesperson":"Joshua Foster","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":83,"SaleDateSanitized":"2026-12-15","customer_name":"Cora Foster","PorscheModelSanitized":"Macan S","ModelYearSanitized":2023,"SalesPriceSanitized":69500,"VehicleMileageSanitized":7800,"PayMethodSanitized":"Lease","CitySanitized":"Boise","StateSanitized":"ID","salesperson":"AMBER","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":84,"SaleDateSanitized":"2026-12-28","customer_name":"Asher Gonzalo","PorscheModelSanitized":"911 GT3 RS","ModelYearSanitized":2025,"SalesPriceSanitized":285000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"San Francisco","StateSanitized":"CA","salesperson":"Andrew Evans","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":85,"SaleDateSanitized":"2024-01-10","customer_name":"Sophia Miller","PorscheModelSanitized":"Taycan 4S","ModelYearSanitized":2024,"SalesPriceSanitized":121000,"VehicleMileageSanitized":500,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Seattle","StateSanitized":"WA","salesperson":"AMANDA scott","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":86,"SaleDateSanitized":"2024-02-15","customer_name":"Daniel Jones","PorscheModelSanitized":"Cayenne S","ModelYearSanitized":2023,"SalesPriceSanitized":102000,"VehicleMileageSanitized":4100,"PayMethodSanitized":"Financing","CitySanitized":"Austin","StateSanitized":"TX","salesperson":"Brian Hall","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":87,"SaleDateSanitized":"2024-03-20","customer_name":"Olivia Brown","PorscheModelSanitized":"Macan GTS","ModelYearSanitized":2024,"SalesPriceSanitized":91000,"VehicleMileageSanitized":1200,"PayMethodSanitized":"Cash","CitySanitized":"Denver","StateSanitized":"CO","salesperson":"jessica","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":88,"SaleDateSanitized":"2024-04-25","customer_name":"Ethan Wilson","PorscheModelSanitized":"911 Carrera S","ModelYearSanitized":2024,"SalesPriceSanitized":141000,"VehicleMileageSanitized":800,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Los Angeles","StateSanitized":"CA","salesperson":"Thomas King","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":89,"SaleDateSanitized":"2024-05-30","customer_name":"Ava Taylor","PorscheModelSanitized":"Panamera","ModelYearSanitized":2023,"SalesPriceSanitized":94000,"VehicleMileageSanitized":6300,"PayMethodSanitized":"Lease","CitySanitized":"Miami","StateSanitized":"FL","salesperson":"NANCY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":90,"SaleDateSanitized":"2024-06-05","customer_name":"Matthew Thomas","PorscheModelSanitized":"718 Cayman","ModelYearSanitized":2022,"SalesPriceSanitized":76000,"VehicleMileageSanitized":11500,"PayMethodSanitized":"Wire Transfer","CitySanitized":"New York","StateSanitized":"NY","salesperson":"Chris Wright","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":91,"SaleDateSanitized":"2024-07-12","customer_name":"Isabella White","PorscheModelSanitized":"Cayenne E-Hybrid","ModelYearSanitized":2025,"SalesPriceSanitized":112000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Financing","CitySanitized":"San Diego","StateSanitized":"CA","salesperson":"KAREN","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":92,"SaleDateSanitized":"2024-08-18","customer_name":"Lucas Harris","PorscheModelSanitized":"Macan T","ModelYearSanitized":2024,"SalesPriceSanitized":67000,"VehicleMileageSanitized":2100,"PayMethodSanitized":"Credit Card","CitySanitized":"Chicago","StateSanitized":"IL","salesperson":"David Martin","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":93,"SaleDateSanitized":"2024-09-22","customer_name":"Mia Martin","PorscheModelSanitized":"Taycan Turbo S","ModelYearSanitized":2024,"SalesPriceSanitized":188000,"VehicleMileageSanitized":900,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Phoenix","StateSanitized":"AZ","salesperson":"SARAH","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":94,"SaleDateSanitized":"2024-10-28","customer_name":"Benjamin Clark","PorscheModelSanitized":"911 GT3","ModelYearSanitized":2025,"SalesPriceSanitized":232000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Dallas","StateSanitized":"TX","salesperson":"James Lee","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":95,"SaleDateSanitized":"2024-11-05","customer_name":"Charlotte Lewis","PorscheModelSanitized":"Panamera 4S","ModelYearSanitized":2023,"SalesPriceSanitized":115000,"VehicleMileageSanitized":5400,"PayMethodSanitized":"Financing","CitySanitized":"Las Vegas","StateSanitized":"NV","salesperson":"MICHELLE","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":96,"SaleDateSanitized":"2024-11-15","customer_name":"Alexander Allen","PorscheModelSanitized":"Cayenne Coupe","ModelYearSanitized":2024,"SalesPriceSanitized":116000,"VehicleMileageSanitized":1800,"PayMethodSanitized":"Debit Card","CitySanitized":"Atlanta","StateSanitized":"GA","salesperson":"Daniel Turner","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":97,"SaleDateSanitized":"2024-12-01","customer_name":"Harper Young","PorscheModelSanitized":"718 Boxster","ModelYearSanitized":2022,"SalesPriceSanitized":65000,"VehicleMileageSanitized":14200,"PayMethodSanitized":"Financing","CitySanitized":"Orlando","StateSanitized":"FL","salesperson":"EMILY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":98,"SaleDateSanitized":"2024-12-10","customer_name":"Sebastian Hernandez","PorscheModelSanitized":"Macan Electric","ModelYearSanitized":2026,"SalesPriceSanitized":85000,"VehicleMileageSanitized":0,"PayMethodSanitized":"Bank Transfer","CitySanitized":"Portland","StateSanitized":"OR","salesperson":"Matthew Parker","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":99,"SaleDateSanitized":"2024-12-20","customer_name":"Evelyn King","PorscheModelSanitized":"Taycan 4S","ModelYearSanitized":2024,"SalesPriceSanitized":124000,"VehicleMileageSanitized":1100,"PayMethodSanitized":"Lease","CitySanitized":"Charlotte","StateSanitized":"NC","salesperson":"AMY","DeliveryStatusSanitized":"Delivered"},
  {"sale_id":100,"SaleDateSanitized":"2024-12-28","customer_name":"Jack Wright","PorscheModelSanitized":"911 Carrera Cabriolet","ModelYearSanitized":2024,"SalesPriceSanitized":146000,"VehicleMileageSanitized":2300,"PayMethodSanitized":"Wire Transfer","CitySanitized":"Boston","StateSanitized":"MA","salesperson":"Andrew Evans","DeliveryStatusSanitized":"Delivered"}
];

        let chartEvolutionInstance = null;
        let chartYearInstance = null;
        let chartModelsInstance = null;
        let chartCityInstance = null;
        let chartPayInstance = null;

        document.addEventListener("DOMContentLoaded", () => {
            populateFilterOptions();
            applyFilters();
        });

        function populateFilterOptions() {
            const models = [...new Set(rawData.map(item => item.PorscheModelSanitized))].sort();
            const years = [...new Set(rawData.map(item => item.ModelYearSanitized))].sort((a,b) => b - a);
            const cities = [...new Set(rawData.map(item => item.CitySanitized))].sort();
            const payMethods = [...new Set(rawData.map(item => item.PayMethodSanitized))].sort();

            const selModel = document.getElementById('filter-model');
            models.forEach(m => selModel.add(new Option(m, m)));

            const selYear = document.getElementById('filter-year');
            years.forEach(y => selYear.add(new Option(y, y)));

            const selCity = document.getElementById('filter-city');
            cities.forEach(c => selCity.add(new Option(c, c)));

            const selPay = document.getElementById('filter-pay');
            payMethods.forEach(p => selPay.add(new Option(p, p)));
        }

        function applyFilters() {
            const selectedModel = document.getElementById('filter-model').value;
            const selectedYear = document.getElementById('filter-year').value;
            const selectedCity = document.getElementById('filter-city').value;
            const selectedPay = document.getElementById('filter-pay').value;

            const filteredData = rawData.filter(item => {
                return (!selectedModel || item.PorscheModelSanitized === selectedModel) &&
                       (!selectedYear || item.ModelYearSanitized.toString() === selectedYear) &&
                       (!selectedCity || item.CitySanitized === selectedCity) &&
                       (!selectedPay || item.PayMethodSanitized === selectedPay);
            });

            updateKPIs(filteredData);
            updateEvolutionChart(filteredData);
            updateSecondaryCharts(filteredData);
            updateTable(filteredData);
        }

        function resetFilters() {
            document.getElementById('filter-model').value = "";
            document.getElementById('filter-year').value = "";
            document.getElementById('filter-city').value = "";
            document.getElementById('filter-pay').value = "";
            applyFilters();
        }

        function updateKPIs(data) {
            const totalUnits = data.length;
            const totalRevenue = data.reduce((acc, curr) => acc + curr.SalesPriceSanitized, 0);
            const avgTicket = totalUnits > 0 ? Math.round(totalRevenue / totalUnits) : 0;

            // Modelo Mais Vendido
            const modelCounts = {};
            data.forEach(item => {
                modelCounts[item.PorscheModelSanitized] = (modelCounts[item.PorscheModelSanitized] || 0) + 1;
            });
            let topModel = '-';
            let topModelCount = 0;
            Object.entries(modelCounts).forEach(([mdl, cnt]) => {
                if(cnt > topModelCount) { topModelCount = cnt; topModel = mdl; }
            });

            // Mês Pico
            const monthMap = {};
            data.forEach(item => {
                if(item.SaleDateSanitized && item.SaleDateSanitized !== 'INVALID') {
                    const monthKey = item.SaleDateSanitized.substring(0, 7); // YYYY-MM
                    monthMap[monthKey] = (monthMap[monthKey] || 0) + item.SalesPriceSanitized;
                }
            });

            let peakMonth = '-';
            let peakRev = 0;
            Object.entries(monthMap).forEach(([m, rev]) => {
                if(rev > peakRev) { peakRev = rev; peakMonth = m; }
            });

            document.getElementById('kpi-revenue').innerText = `$${totalRevenue.toLocaleString()}`;
            document.getElementById('kpi-units').innerText = totalUnits.toLocaleString();
            document.getElementById('kpi-ticket').innerText = `$${avgTicket.toLocaleString()}`;
            document.getElementById('kpi-top-model').innerText = topModel;
            document.getElementById('kpi-top-model-sub').innerText = topModel !== '-' ? `${topModelCount} unidades` : 'Sem dados';
            document.getElementById('kpi-peak-month').innerText = peakMonth;
            document.getElementById('kpi-peak-revenue').innerText = peakRev > 0 ? `$${peakRev.toLocaleString()}` : 'Sem dados temporais';
            document.getElementById('total-records-count').innerText = `${totalUnits} Registros Filtrados`;
        }

        // GRÁFICO 1: EVOLUÇÃO MENSAL DAS VENDAS
        function updateEvolutionChart(data) {
            const monthlyData = {};

            data.forEach(item => {
                if(item.SaleDateSanitized && item.SaleDateSanitized !== 'INVALID') {
                    const monthKey = item.SaleDateSanitized.substring(0, 7);
                    if(!monthlyData[monthKey]) {
                        monthlyData[monthKey] = { revenue: 0, units: 0 };
                    }
                    monthlyData[monthKey].revenue += item.SalesPriceSanitized;
                    monthlyData[monthKey].units += 1;
                }
            });

            const sortedMonths = Object.keys(monthlyData).sort();
            const revenues = sortedMonths.map(m => monthlyData[m].revenue);
            const units = sortedMonths.map(m => monthlyData[m].units);

            if (chartEvolutionInstance) chartEvolutionInstance.destroy();

            chartEvolutionInstance = new Chart(document.getElementById('chartEvolution'), {
                type: 'bar',
                data: {
                    labels: sortedMonths,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Faturamento Total ($)',
                            data: revenues,
                            borderColor: '#D5001C',
                            backgroundColor: 'rgba(213, 0, 28, 0.15)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.35,
                            pointBackgroundColor: '#FFF',
                            pointBorderColor: '#D5001C',
                            pointRadius: 4,
                            yAxisID: 'y'
                        },
                        {
                            type: 'bar',
                            label: 'Unidades Vendidas',
                            data: units,
                            backgroundColor: 'rgba(227, 228, 230, 0.25)',
                            borderColor: 'rgba(227, 228, 230, 0.5)',
                            borderWidth: 1,
                            borderRadius: 4,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    scales: {
                        x: {
                            grid: { color: 'rgba(255,255,255,0.03)' },
                            ticks: { color: '#8E96A4' }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            grid: { color: 'rgba(255,255,255,0.05)' },
                            ticks: {
                                color: '#D5001C',
                                callback: value => '$' + (value / 1000) + 'k'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            grid: { drawOnChartArea: false },
                            ticks: { color: '#E3E4E6', stepSize: 1 }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { color: '#E3E4E6', font: { family: 'Inter' } }
                        }
                    }
                }
            });
        }

        function updateSecondaryCharts(data) {
            Chart.defaults.color = '#8E96A4';
            Chart.defaults.font.family = 'Inter';

            // Model Year
            const yearMap = {};
            data.forEach(d => yearMap[d.ModelYearSanitized] = (yearMap[d.ModelYearSanitized] || 0) + 1);
            const sortedYears = Object.keys(yearMap).sort();
            const yearValues = sortedYears.map(y => yearMap[y]);

            if (chartYearInstance) chartYearInstance.destroy();
            chartYearInstance = new Chart(document.getElementById('chartYear'), {
                type: 'bar',
                data: {
                    labels: sortedYears,
                    datasets: [{
                        label: 'Unidades',
                        data: yearValues,
                        backgroundColor: '#D5001C',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true },
                        x: { grid: { display: false } }
                    }
                }
            });

            // Top Models
            const modelMap = {};
            data.forEach(d => modelMap[d.PorscheModelSanitized] = (modelMap[d.PorscheModelSanitized] || 0) + 1);
            const sortedModels = Object.keys(modelMap).sort((a,b) => modelMap[b] - modelMap[a]).slice(0, 7);
            const modelValues = sortedModels.map(m => modelMap[m]);

            if (chartModelsInstance) chartModelsInstance.destroy();
            chartModelsInstance = new Chart(document.getElementById('chartModels'), {
                type: 'bar',
                data: {
                    labels: sortedModels,
                    datasets: [{
                        label: 'Vendas',
                        data: modelValues,
                        backgroundColor: '#E3E4E6',
                        borderRadius: 4
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true },
                        y: { grid: { display: false } }
                    }
                }
            });

            // Revenue por Cidade
            const cityRevenueMap = {};
            data.forEach(d => cityRevenueMap[d.CitySanitized] = (cityRevenueMap[d.CitySanitized] || 0) + d.SalesPriceSanitized);
            const sortedCities = Object.keys(cityRevenueMap).sort((a,b) => cityRevenueMap[b] - cityRevenueMap[a]).slice(0, 8);
            const cityValues = sortedCities.map(c => cityRevenueMap[c]);

            if (chartCityInstance) chartCityInstance.destroy();
            chartCityInstance = new Chart(document.getElementById('chartCity'), {
                type: 'bar',
                data: {
                    labels: sortedCities,
                    datasets: [{
                        label: 'Faturamento ($)',
                        data: cityValues,
                        backgroundColor: '#1C222E',
                        borderColor: '#D5001C',
                        borderWidth: 1.5,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true },
                        x: { grid: { display: false } }
                    }
                }
            });

            // Payment Methods
            const payMap = {};
            data.forEach(d => payMap[d.PayMethodSanitized] = (payMap[d.PayMethodSanitized] || 0) + 1);
            const payLabels = Object.keys(payMap);
            const payValues = payLabels.map(p => payMap[p]);

            if (chartPayInstance) chartPayInstance.destroy();
            chartPayInstance = new Chart(document.getElementById('chartPay'), {
                type: 'doughnut',
                data: {
                    labels: payLabels,
                    datasets: [{
                        data: payValues,
                        backgroundColor: [
                            '#D5001C', '#E3E4E6', '#2979FF', '#FFAB00', 
                            '#00E676', '#8E96A4', '#9C27B0', '#FF5722'
                        ],
                        borderWidth: 2,
                        borderColor: '#14171E'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } }
                    }
                }
            });
        }

        function updateTable(data) {
            const tbody = document.getElementById('table-body');
            tbody.innerHTML = '';

            const sortedTable = [...data].sort((a, b) => {
                if(a.SaleDateSanitized === 'INVALID') return 1;
                if(b.SaleDateSanitized === 'INVALID') return -1;
                return new Date(b.SaleDateSanitized) - new Date(a.SaleDateSanitized);
            });

            sortedTable.slice(0, 30).forEach(item => {
                const tr = document.createElement('tr');
                let badgeClass = 'badge-pending';
                if(item.DeliveryStatusSanitized === 'Delivered') badgeClass = 'badge-delivered';
                else if(item.DeliveryStatusSanitized === 'In Transit') badgeClass = 'badge-transit';

                tr.innerHTML = `
                    <td>${item.SaleDateSanitized || 'N/A'}</td>
                    <td>#${item.sale_id}</td>
                    <td><strong>${item.PorscheModelSanitized}</strong></td>
                    <td>${item.ModelYearSanitized}</td>
                    <td>$${item.SalesPriceSanitized.toLocaleString()}</td>
                    <td>${item.CitySanitized}, ${item.StateSanitized}</td>
                    <td>${item.PayMethodSanitized}</td>
                    <td><span class="badge-status ${badgeClass}">${item.DeliveryStatusSanitized}</span></td>
                `;
                tbody.appendChild(tr);
            });
        }