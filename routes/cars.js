const express=require("express");
const router=express.Router();


const _id=Math.floor(Math.random()*99999999)

const cars=[
    {
        id:_id,
        name:"Lamborghini Aventador",
        price:"295014.20 - 358357.00",
        desc:"The Lamborghini Aventador is available in a choice of three variants - the S, S Roadster and the SVJ. All three of these are powered by a 6.5-litre V12 engine, albeit in different states of tune ranging from 700PS to 770PS in the most powerful SVJ variant. The torque figure, on the other hand, varies from 690Nm to 720Nm, depending on the variant chosen. The transmission unit is a 7-speed automatic which sends power to all four wheels. Its top speed has been rated at 350kmph. ",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/7195/1645612088168/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/7195/1645612088168/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/7195/1645612088168/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/7195/1645612088168/front-view-118.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"7.19kmpl"
            },
            {
                "Engine(upto)":"5204cc"
            },
            {
                "BHP":"640.0"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"110-litres"
            }
        ]
    },
    {
        id:_id,
        name:"Lamborghini Huracan EVO",
        price:"395014.20 - 658357.00",
        desc:"The Lamborghini Huracan EVO has 1 Petrol Engine on offer. The Petrol engine is 5204 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Huracan EVO has a mileage of . The Huracan EVO is a 2 seater 10 cylinder car and has length of 4549mm, width of 2236mm and a wheelbase of 2620mm.. ",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/exterior-image-165.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"7.79kmpl"
            },
            {
                "Engine(upto)":"6498cc"
            },
            {
                "BHP":"759.01"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"230litres"
            }
        ]
    },
     {
        id:_id,
        name:"Ferrari Roma",
        price:"395014.20",
        desc:"The price of Ferrari Roma starts at Rs. 3.76 Cr and goes upto Rs. 3.76 Cr. Ferrari Roma is offered in 1 variants - the base model of Roma is Coupe V8 and the top variant Ferrari Roma Coupe V8 which comes at a price tag of Rs. 3.76 Cr.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Roma/7857/1591619120027/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Roma/7857/1591680935117/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Roma/7857/1591680935117/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Roma/7857/1591680935117/front-view-118.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"8.93kmpl"
            },
            {
                "Engine(upto)":"3855cc"
            },
            {
                "BHP":"611.5"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"273litres"
            }
        ]
    },
     {
        id:_id,
        name:"Ferrari Portofino",
        price:"39501.42",
        desc:"Ferrari has launched the Portofino in India at Rs 3.5 crore (ex-showroom pan-India). It replaces the California T, which was launched in the country in 2015. The Portofino is powered by a 3.9-litre twin-turbo V8 petrol engine that generates 600PS of maximum power and 760Nm of peak torque. It is mated to a 7-speed dual-clutch transmission, which sends power to the rear wheels through an electronic differential. This combination is capable enough to take the Portofino to 100kmph from a standstill in 3.5 seconds, 0.1 second quicker than the California T. At 10.8 seconds, it is also 0.4 seconds quicker than its predecessor to reach 200kmph from a standstill. The Portofino’s top speed is rated at over 320kmph. It takes on the likes of the Jaguar F-Type SVR Convertible, Maserati Gran Cabrio and the Lamborghini Huracan Performante Spyder.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Ferrari-Portofino/6172/1550828910903/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Ferrari-Portofino/6172/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Ferrari-Portofino/6172/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/Ferrari-Portofino/6172/front-view-118.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"9.0kmpl"
            },
            {
                "Engine(upto)":"3855cc"
            },
            {
                "BHP":"591.79"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"273litres"
            }
        ]
    },
    {
        id:_id,
        name:"Ferrari SF90 Stradale",
        price:"921699.80",
        desc:"The price of Ferrari SF90 Stradale starts at Rs. 7.50 Cr and goes upto Rs. 7.50 Cr. Ferrari SF90 Stradale is offered in 1 variants - the base model of SF90 Stradale is Coupe V8 and the top variant Ferrari SF90 Stradale Coupe V8 which comes at a price tag of Rs. 7.50 Cr.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/SF90-Stradale/7858/1591619661237/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/SF90-Stradale/7858/1591681679806/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/SF90-Stradale/7858/1591681679806/front-view-118.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/SF90-Stradale/7858/1591681679806/rear-view-119.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"916.39kmpl"
            },
            {
                "Engine(upto)":"3990cc"
            },
            {
                "BHP":"591.79"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"273litres"
            }
        ]
    },
    {
        id:_id,
        name:"Ferrari 812",
        price:"790028.40",
        desc:"The price of Ferrari 812 starts at Rs. 5.75 Cr and goes upto Rs. 5.75 Cr. Ferrari 812 is offered in 1 variants - the base model of 812 is GTS and the top variant Ferrari 812 GTS which comes at a price tag of Rs. 5.75 Cr.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/812/7859/1591619494883/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/812/7859/1591680599100/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/812/7859/1591680599100/grille-97.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/812/7859/1591680599100/taillight-44.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"6.1kmpl"
            },
            {
                "Engine(upto)":"6496cc"
            },
            {
                "BHP":"591.79"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"273litres"
            }
        ]
    },
    {
        id:_id,
        name:"Ferrari F8 Tributo",
        price:"526685.60",
        desc:"The price of Ferrari F8 Tributo starts at Rs. 4.02 Cr and goes upto Rs. 4.02 Cr. Ferrari F8 Tributo is offered in 1 variants - the base model of F8 Tributo is V8 Turbo and the top variant Ferrari F8 Tributo V8 Turbo which comes at a price tag of Rs. 4.02 Cr.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/front-view-118.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ferrari/F8-Tributo/7945/1598599471404/rear-view-119.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"7.75kmpl"
            },
            {
                "Engine(upto)":"3902cc"
            },
            {
                "BHP":"710.74"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"200litres"
            }
        ]
    },
    {
        id:_id,
        name:"Bugatti Divo",
        price:"5398527.40",
        desc:"The Bugatti Divo is the French hypercar maker's crown jewel currently and commands a price tag of Rs 41 crores ($5.8 million). It is limited to just 40 units which are already sold out.  The Bugatti Divo is powered by the same eight-litre quad-turbo W16 engine which also propels the Chiron and puts out a whopping 1500PS of peak power and is mated to a 7-speed dual-clutch transmission. While its predecessors, the Veyron and the Chiron managed a top speed of 400+ kmph, the Divo is capable of 380 kmph.  However, the Bugatti Divo is meant to deliver better performance on the track. It has already proved its credentials by being 8 seconds faster than the Chiron on the Nardo handling circuit in Italy. .",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Divo/6528/1550827902051/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Divo/6528/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Divo/6528/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Divo/6528/front-view-118.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"7.75kmpl"
            },
            {
                "Engine(upto)":"3902cc"
            },
            {
                "BHP":"710.74"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"200litres"
            }
        ]
    },
    {
        id:_id,
        name:"Bugatti Veyron",
        price:"1580056.80",
        desc:"April 28, 2015: Bugatti, originally French and now owned by Volkswagen group is oiling up its Veyron successors named as Chiron. Reports say that this all new car hypercar will do 0-100 kmph in just 2 seconds. Bugatti is expected to use the W16 8.0 litre engine from the Veyron that may produce more than 1500 PS and will add to the Formula1 car beating performance. The torque is believed to remain 1500 Nm but it will be coming in at a lower rpm than the current car. Moreover, Chiron could even be a hybrid as it’s name indicates towards a mythical animal, half human and half horse.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Veyron/1340/1559125026509/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Veyron/1340/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Veyron/1340/rear-view-119.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Veyron/1340/side-mirror-(body)-93.jpg?tr=w-456"
        ],
        keyspecs:[
            {
                "Mileage(upto)":"6,8kmpl"
            },
            {
                "Engine(upto)":"7993cc"
            },
            {
                "BHP":"1001.0"
            },
            {
                "Transmission":"Automatic"
            },
            {
                "Seats":"2"
            },
            {
                "Boot Space":"37 litres"
            }
        ]
    },
    {
        id:_id,
        name:"Tesla Model Y",
        price:"92169.98",
        desc:"In terms of features, the Model Y is equipped with a 15-inch tablet-like display which runs a host of controls of the electric SUV. Other features on board include 12-way power-adjustable (only at the front) and heated front and rear seats, panoramic glass roof, dual-zone climate control and wireless charging. The Model Y will also come with Tesla’s semi-autonomous Autopilot technology consisting of blind-spot monitoring, a 360-degree camera, front and rear sensors, adaptive cruise control, collision warning and emergency brake assist.",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Tesla-Model-Y/6396/1552894185017/front-left-side-47.jpg?tr=w-456",
            
        ],
        keyspecs:[
            {
                "Mileage(upto)":"6,8kmpl"
            },
           {
               "Fuel":"Electric"
           },
           ,
            {
                "Bodytype":"Suv"
            },
            {
                "Seats":"5"
            },
            
        ]
    },
    {
        id:_id,
        name:"Tesla Model 3",
        price:"79002.84",
        desc:"Tesla has equipped the US-spec Model 3 with two wireless charging pads, a massive 15-inch touchscreen infotainment system, 12-way power-adjustable front seats with heated function, and a 14-speaker sound system along with autonomous driving features. It remains to be seen what all goodies Tesla offers with the India-spec model, but it is expected to be a feature-rich offering as it will be an import. ",
        images:[
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Tesla-Model-3/5100/1558500541732/front-left-side-47.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Tesla-Model-3/5100/1556622843221/side-view-(left)-90.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Tesla-Model-3/5100/1556622843221/rear-left-view-121.jpg?tr=w-456",
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Tesla-Model-3/5100/1556622843221/top-view-117.jpg?tr=w-456"
            
        ],
        keyspecs:[
            {
                "Transmission":"Automatic"
            },
            
           {
               "Fuel":"Electric"
           },
           ,
            {
                "Bodytype":"Sedan"
            },
            {
                "Seats":"5"
            },
            
        ]
    },
]

const premiumImages=[
    {
    id:_id,
    name:"Aventador",
    brand:"Lamborghini",
    image:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_s_02_m.jpg"
    },
    {
    id:_id,
    name:"Huracan",
    brand:"Lamborghini",
    image:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/images-s/rid/s-3.jpg"
    },
    {
    id:_id,
    name:"Urus",
    brand:"Lamborghini",
    image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/img-sx-text-dx/urus_gif_m.jpg"
    },
    {
    id:_id,
    name:"Concept",
    brand:"Lamborghini",
    image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/images-s/S2_502326_M.jpg"
    }
]


router.get("/",(req,res)=>{
    res.status(200).json("welcome to cars api")
})
router.get("/cars",(req,res)=>{
    res.status(200).json(cars)
})

router.get("/premium",(req,res)=>{
    res.status(200).json(premiumImages)
})



module.exports=router;