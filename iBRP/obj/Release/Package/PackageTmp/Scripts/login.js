Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'iBRP',
    appFolder: '../Scripts/extjs42/app',
    autoCreateViewport: false,
    //controllers: ['Main'],
    launch: function () {
        console.log('App Launch');

        //Example for Model
        //        Ext.define("Country", {
        //            extend: "Ext.data.Model",
        //            fields: ["name", "capital", "population"],
        //            idProperty: "name",
        //            proxy: {
        //                type: "memory",
        //                data: {
        //                    country: {
        //                        name: "France",
        //                        capital: "Paris",
        //                        population: 65436552
        //                    }
        //                },
        //                reader: {
        //                    type: "json",
        //                    root: "country"
        //                }
        //            }
        //        });
        //
        //        Country.load("France", {
        //            success: function(record) {
        //                console.log(record.get("capital"));    //Prints Paris
        //                console.log(record.get("population")); //Prints 65436552
        //            }
        //        });
        //End example model

        //An example about validation
        //        Ext.define("Book", {
        //            extend: "Ext.data.Model",
        //            fields: ["title", "author", "ISBN", "price"],
        //            validations: [
        //                {type: "presence", field: "title"},
        //                {type: "length", field: "author", max: 20, min: 3},
        //                {type: "format", field: "ISBN",
        //                    matcher: /ISBN(?:-13)?:?\x20*(?=.{17}$)97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/},
        //                {type: "inclusion", field: "price", list: ["$20", "$25", "$30", "$35"]}
        //            ]
        //        });
        //        var b1 = Ext.create("Book", {title: "Practical XYZ", ISBN: "ISBN: 978-3-5028-4391-71", price: "$45"});
        //        var errors = b1.validate();
        //        errors.each(function(item) {
        //            console.log(item.field + " " + item.message);
        //        });
        //end example

        //An example about association
        //        Ext.define("Continent", {
        //            extend: "Ext.data.Model",
        //            fields: ["name"]
        //        });
        //        Ext.define("City", {
        //            extend: "Ext.data.Model",
        //            fields: ["name"]
        //        });
        //        Ext.define("CountryDetails", {
        //            extend: "Ext.data.Model",
        //            fields: ["id", "population"],
        //        });
        //        Ext.define("Country", {
        //            extend: "Ext.data.Model",
        //            idProperty: "name",
        //            fields: ["name", "capital"],
        //            hasMany: [{name: "cities", model: "City"}],
        //            hasOne: [{model: "CountryDetails"}],
        //            belongsTo: [{model: "Continent"}],
        //            proxy: {
        //                type: "memory",
        //                data: {
        //                    country: {
        //                        name: "France",
        //                        capital: "Paris",
        //                        countrydetails: {
        //                            id: "cd101",
        //                            population: 65436552
        //                        },
        //                        cities: [
        //                            {name: "Lyon"}, {name: "Avignon"}
        //                        ],
        //                        continent: {
        //                            name: "Europe"
        //                        }
        //                    }
        //                },
        //                reader: {
        //                    type: "json",
        //                    root: "country"
        //                }
        //            }
        //        });
        //
        //        Country.load("France", {
        //            success: function(record) {
        //                var continent = record.getContinent();
        //                console.log(continent.get("name"));
        //                var countryDetails = record.getCountryDetails();
        //                console.log(countryDetails.get("population"));
        //                var cities = record.cities();
        //                cities.each(function(city) {
        //                    console.log(city.get("name"));
        //                });
        //            }
        //        });
        //End example

        //An example about Store
        //        Ext.define("Book", {
        //            extend: "Ext.data.Model",
        //            fields: ["title", "author", "price"]
        //        });
        //
        //        var bookStore = Ext.create("Ext.data.Store", {
        //            model: "Book"
        //        });
        //        bookStore.add({title: "Zend Framework", author: "Zend", price: 49.99});
        //        bookStore.add({title: "Beginning F#", author: "Robert Pickering", price: 44.99});
        //        bookStore.add({title: "Pro Hadoop", author: "Jason Venner", price: 39.99});
        //        bookStore.sort("title", "ASC");
        //        bookStore.filter("price", 49.99);
        //        bookStore.each(function(book) {
        //            console.log(book.get("title") + ", " + book.get("author"));
        //        });

        //var bookStore = Ext.create("Ext.data.Store", {
        //    fields: ["title", "author", "price"],
        //    data: [
        //        { title: "Zend Framework", author: "Zend", price: 49.99 },
        //        { title: "Beginning F#", author: "Robert Pickering", price: 44.99 },
        //        { title: "Pro Hadoop", author: "Jason Venner", price: 39.99 }
        //    ],
        //    autoLoad: false
        //});
        //bookStore.on("load", function (src) {
        //    console.log("loaded " + src.getCount());
        //});
        //bookStore.load();
        //bookStore.on("update", function (src, record) {
        //    console.log("updated " + record.get("title"));
        //});
        //bookStore.on("datachanged", function (src) {
        //    console.log("datachanged " + src.getCount());
        //});
        //bookStore.add({ title: "Pro Spring Security", author: "Carlo Scarioni", price: 49.99 });
        //bookStore.getAt(0).set("price", 50.00);


        Ext.create('iBRP.view.LayoutLoginForm', {
            renderTo: Ext.getBody()
        });

    }
});