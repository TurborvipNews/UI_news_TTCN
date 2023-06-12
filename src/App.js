import "./App.css";
// import { useStore } from "../src/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./route";
import DefaultLayout from "./Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  // const [state] = useStore();

  return (
    // <div className="App">
    //   {
    //     state.auth &&
    //     <>
    //       <HeaderCommon />
    //       <Navbar />
    //       <Home />
    //       <FooterCommon />
    //     </>
    //   }

    // </div>
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            // Page ở đây coi như một component
            const Page = route.component;
            const param = route?.param || null;
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
                {param && (
                  <Route
                    path={`:${param}`}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                )}
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
