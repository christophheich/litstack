(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{262:function(e,a,o){"use strict";o.r(a);var t=o(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"crud-introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#crud-introduction"}},[e._v("#")]),e._v(" CRUD Introduction")]),e._v(" "),o("p",[e._v("One of the main functions of Fjord is to make data from the database manageable. For this purpose you can easily create form "),o("code",[e._v("fields")]),e._v(" for each "),o("code",[e._v("column")]),e._v(" from the database, each "),o("code",[e._v("relation")]),e._v(" of a model or other.")]),e._v(" "),o("h2",{attrs:{id:"models"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[e._v("#")]),e._v(" Models")]),e._v(" "),o("p",[e._v("The main component of an admin panel is to manage data. Fjord offers the possibility to make "),o("a",{attrs:{href:"https://laravel.com/docs/7.x/eloquent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Eloquent Models"),o("OutboundLink")],1),e._v(" editable and manageable. For a clear administration of models a suitable "),o("code",[e._v("index")]),e._v(" table and the corresponding "),o("code",[e._v("create")]),e._v(" and "),o("code",[e._v("update")]),e._v(" form is needed. Fjord also comes with open source packages to make models "),o("code",[e._v("translatable")]),e._v(" and "),o("code",[e._v("sluggable")]),e._v(" and to attach "),o("code",[e._v("media")]),e._v(".The following packages are used for this")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.astrotomic.info/laravel-translatable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Astronomic Translatable"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.spatie.be/laravel-medialibrary/v8/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spatie Medialibrary"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cviebrock/eloquent-sluggable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cviebrock Sluggable"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("configuration")]),e._v(" for the CRUD Models takes place in the Config folder Crud, each Model gets its own config file named after the model ("),o("code",[e._v("{model}Config.php")]),e._v("). The config folder could look like this:")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("- Config/\n    - Crud/\n        - PostConfig.php\n        - CommentConfig.php\n        "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),o("h2",{attrs:{id:"forms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forms"}},[e._v("#")]),e._v(" Forms")]),e._v(" "),o("p",[e._v("Fjord-Forms provide a convenient way to store, organize and maintain data of many kinds, such as your page-content. You may create as many "),o("code",[e._v("Forms")]),e._v(" as you like.")]),e._v(" "),o("p",[o("code",[e._v("Forms")]),e._v(" are divided into Form "),o("code",[e._v("collections")]),e._v(" to keep the overview. For example, the "),o("code",[e._v("Forms")]),e._v(" "),o("strong",[e._v("home")]),e._v(" and "),o("strong",[e._v("faq")]),e._v(", which contain the page-content for the pages "),o("strong",[e._v("home")]),e._v(" and "),o("strong",[e._v("faq")]),e._v(", can be included in the "),o("code",[e._v("collection")]),e._v(" "),o("strong",[e._v("pages")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"configuration-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-2"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("In fact, Fjord comes with "),o("code",[e._v("Forms")]),e._v(" by default: "),o("strong",[e._v("Pages")]),e._v(" and "),o("strong",[e._v("Settings")]),e._v(". Every page's content is defined by a single config in the "),o("code",[e._v("Config/Forms")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("- Config/\n    - Forms/\n        - Pages/\n            - HomeConfig.php\n            - FaqConfig.php\n            "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n        - Settings/\n            - MainConfig.php\n            "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n        "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);