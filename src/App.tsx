import { Refine } from "@pankod/refine-core";
import { notificationProvider, LoginPage, ErrorComponent } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import "@pankod/refine-antd/dist/styles.min.css";
import { dataProvider } from "@pankod/refine-supabase";

import { UserList } from "./pages/user";
import { TaskList, TaskShow, TaskCreate, EditTask } from "./pages/task";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        element: <Signup/>,
                        path: "/signup",
                    },
                ] as typeof routerProvider.routes,
      }}
      resources={[
                {
                    name: "users",
                    list: UserList,
                },
                {
                    name: "tasks",
                    list: TaskList,
                    edit: EditTask,
                    create: TaskCreate,
                    show: TaskShow,
                },
      ]}
      DashboardPage={Dashboard}
      notificationProvider={notificationProvider}
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      LoginPage={Login}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
      i18nProvider={i18nProvider}
    />
  );
}

export default App;
