import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import { SearchPage } from "./features/SearchPage";

export const Root = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<SearchPage />} />
    <Route path={ROUTES.USER_PROFILE} element={<>User</>} />
    <Route path={ROUTES.REPO_COMMITS} element={<>Commits</>} />

    <Route path={ROUTES.NOT_FOUND} element={<h2>Page not found</h2>} />
  </Routes>
);
