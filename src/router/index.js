import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloI18n from "../components/HelloI18n.vue";
// TODO: Figure out what I was doing with @/components vs @/views for signin and signup
import UserSignInEmail from "@/views/UserSignInEmail.vue";
import UserSignUpEmailVue from "@/components/UserSignUpEmail.vue";
import SharkSampleEditorVue from "@/components/SharkSampleEditor.vue";
import SpecimenCreate from "@/components/SpecimenCreate";
import SpecimenEdit from "@/components/SpecimenEdit";
import CollaboratorEditorVue from "@/components/CollaboratorEditor.vue";
import SharkDataTable from "@/components/SharkDataTable.vue";
import SamplesDataTable from "@/components/SamplesDataTable";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "pageTitle.home" },
  },
  {
    path: "/register",
    name: "register",
    component: UserSignUpEmailVue,
    meta: { title: "pageTitle.register" },
  },
  {
    path: "/login",
    name: "login",
    component: UserSignInEmail,
    meta: { title: "pageTitle.login" },
  },
  {
    path: "/user",
    name: "user",
    component: CollaboratorEditorVue,
  },
  {
    path: "/demo/editor",
    name: "demo_editor",
    component: SharkSampleEditorVue,
  },
  {
    path: "/specimen/create",
    name: "specimen_create",
    component: SpecimenCreate,
  },
  {
    path: "/specimen/:id",
    name: "specimen_edit",
    component: SpecimenEdit,
  },
  {
    path: "/demo/table",
    name: "demo_table",
    component: SharkDataTable,
  },
  {
    path: "/samples",
    name: "samples_table",
    component: SamplesDataTable,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/i18n",
    name: "Internationalization",
    component: HelloI18n,
  },
];

const router = new VueRouter({
  routes,
});
// router.beforeEach((to, from) => {
//   document.title = $t(to.meta.title);
//   console.info(from);
// });

export default router;
