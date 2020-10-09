import {h,init} from 'snabbdom'
import classModule from 'snabbdom/modules/class'
import style from 'snabbdom/modules/style'
import props from 'snabbdom/modules/props'
import eventlisteners from 'snabbdom/modules/eventlisteners'


const patch = init([style,eventlisteners,classModule,props])
var vnode;
var sortBy = 'rank'
var originalData = [
    {rank: 1, title: 'The Shawshank Redemption', desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', elmHeight: 0},
    {rank: 2, title: 'The Godfather', desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', elmHeight: 0},
    {rank: 3, title: 'The Godfather: Part II', desc: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.', elmHeight: 0},
  ];
  var data = [
    originalData[0],
    originalData[1],
    originalData[2],
  ];
  

  function changeSort(prop){
    sortBy = prop
    data.sort((a, b) => {
        if (a[prop] > b[prop]) {
          return 1;
        }
        if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      });
      render()
    
  }
  function render(){
      vnode = patch(vnode,view(data))
  }
  function listView(item) {
      return h('div',{
        style:{background: 'white', padding:'5px',margin:'10px'}
      },[
          h('div',item.title),
          h('div',item.desc)
      ])
  }

  function view(items) {
      return h('div',[
          h('h1','Top 10 movies'),
          h('span',[
              h('a.btn.rank',{class:{active: sortBy ==='rank'},on:{click:[changeSort,'rank']}},'Rank'),
              h('a.btn.title',{class:{active: sortBy ==='title'},on:{click:[changeSort,'title']}},'Title'),
              h('a.btn.desc',{class:{active: sortBy ==='desc'},on:{click:[changeSort,'desc']}},'Description')
          ]),
          h('div.list',{},items.map(listView))
      ])
  }


window.addEventListener('DOMContentLoaded',()=>{
    var app = document.getElementById('app')
    vnode = patch(app, view(data))
})