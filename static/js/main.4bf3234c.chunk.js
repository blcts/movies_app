(this.webpackJsonpmovies_app=this.webpackJsonpmovies_app||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(2)),s=i(1),l=(i(15),i(16),i(17),i(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbId)}))})},m=i(9),d=i(7),j=i.n(d);var b=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,r=e.required,o=void 0!==r&&r,m=e.onChange,d=void 0===m?function(){}:m,b=Object(s.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),h=Object(c.a)(b,1)[0],u=Object(s.useState)(!1),O=Object(c.a)(u,2),g=O[0],p=O[1],v=g&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:h,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:h,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(n),value:i,onChange:function(e){return d(e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},h=function(e){var t=e.onAdd,i=Object(s.useState)(0),a=Object(c.a)(i,2),n=a[0],r=a[1],o=Object(s.useState)(""),d=Object(c.a)(o,2),j=d[0],h=d[1],u=Object(s.useState)(""),O=Object(c.a)(u,2),g=O[0],p=O[1],v=Object(s.useState)(""),x=Object(c.a)(v,2),M=x[0],f=x[1],N=Object(s.useState)(""),w=Object(c.a)(N,2),U=w[0],y=w[1],I=Object(s.useState)(""),T=Object(c.a)(I,2),B=T[0],S=T[1];return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t((function(e){return[].concat(Object(m.a)(e),[{title:j.trim(),description:g.trim(),imgUrl:M.trim(),imdbUrl:U.trim(),imdbId:B.trim()}])})),r((function(e){return e+1})),h(""),p(""),f(""),y(""),S("")},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(b,{name:"title",label:"Title",value:j,onChange:h,required:!0}),Object(l.jsx)(b,{name:"description",label:"Description",value:g,onChange:p}),Object(l.jsx)(b,{name:"imgUrl",label:"Image URL",value:M,onChange:f,required:!0}),Object(l.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:y,required:!0}),Object(l.jsx)(b,{name:"imdbId",label:"Imdb ID",value:B,onChange:S,required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:""===j.trim()||""===M.trim()||""===U.trim()||""===B.trim(),children:"Add"})})})]},n)},u=i(8),O=function(){var e=Object(s.useState)(u),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{onAdd:a})})]})};n.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.4bf3234c.chunk.js.map