export default {
  menus: [ // 菜单相关路由
    // { key: "/user", title: "用户", icon: "user", subs: [{
    //     key: "/user/buttons",
    //     title: "按钮",
    //     icon: "user",
    //     component: "UserCont"
    //   }]
    // },
    { key: "/", title: "普通预定", icon: "upload", component: "UserCont" },
    { key: "/more", title: "团队预定", icon: "video-camera", component: "UserCont" },
    { key: "/more", title: "长包房预定", icon: "video-camera", component: "UserCont" },
    { key: "/more", title: "实租房预定", icon: "video-camera", component: "UserCont" }
  ],
  others: [] // 非菜单相关路由
}