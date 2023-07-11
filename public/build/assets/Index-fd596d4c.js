import{_}from"./AuthenticatedLayout-6c2b6329.js";import{T as m,o as c,f as i,a,u as d,w as r,F as p,Z as g,b as t,j as n,d as l,s as y,t as s}from"./app-1741f93d.js";import"./ApplicationLogo-cbeaf2a5.js";import"./_plugin-vue_export-helper-c27b6911.js";const f=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Posts",-1),w={class:"py-12"},b={class:"max-w-7xl mx-auto sm:px-2 lg:px-2 space-y-6"},k={class:"p-4 sm:p-4 bg-white shadow sm:rounded-lg"},v={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},N={class:"min-w-full divide-y divide-gray-200"},T=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"No"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Judul"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Kategori"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[400px]"},"Konten"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Tgl Terbit"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Penulis"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Aksi")])],-1),A={class:"bg-white divide-y divide-gray-200"},B={class:"px-6 py-4 whitespace-nowrap"},C={class:"px-6 py-4 whitespace-nowrap"},P={class:"px-6 py-4 whitespace-nowrap"},V={class:"px-6 py-4 whitespace-wrap"},j={class:"px-6 py-4 whitespace-nowrap"},D={class:"px-6 py-4 whitespace-nowrap"},E={class:"px-6 py-4 whitespace-nowrap"},F={class:"flex items-center"},I=["onClick"],Z={__name:"Index",props:{posts:Array},setup(x){const u=m({});function h(o){confirm("Are you sure you want to Delete")&&u.delete(route("posts.destroy",o))}return(o,K)=>(c(),i(p,null,[a(d(g),{title:"Posts"}),a(_,null,{header:r(()=>[f]),default:r(()=>[t("div",w,[t("div",b,[t("div",k,[a(d(n),{href:o.route("posts.create"),as:"button",class:"mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},{default:r(()=>[l(" Tambah ")]),_:1},8,["href"])]),t("div",v,[t("table",N,[T,t("tbody",A,[(c(!0),i(p,null,y(x.posts,e=>(c(),i("tr",null,[t("td",B,s(e.id),1),t("td",C,s(e.judul),1),t("td",P,s(e.kategori),1),t("td",V,s(e.konten),1),t("td",j,s(e.created_at),1),t("td",D,s(e.penulis),1),t("td",E,[t("div",F,[a(d(n),{href:o.route("posts.edit",e.id),class:"mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"},{default:r(()=>[l("Edit ")]),_:2},1032,["href"]),t("button",{onClick:$=>h(e.id),tabIndex:"-1",type:"button",className:"mx-1 px-4 py-[10px] text-sm text-white bg-red-500 hover:bg-red-700 rounded"},"Hapus",8,I)])])]))),256))])])])])])]),_:1})],64))}};export{Z as default};