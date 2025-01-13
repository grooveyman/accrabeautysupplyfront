import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context/CategoriesCtxProvider";
import { formatText, returnCategoryNameViaCode } from "../../../helpers/Helperfunctions";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function CustomizedBreadcrumbs({ category, name, productCode }) {
  const { categoriesData } = React.useContext(CategoriesContext);
  const categoryObj = categoriesData?.results || {};
  const categoryName = returnCategoryNameViaCode(category, categoryObj) || "Unknown";

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          sx={{ cursor: "pointer", fontSize: { xs: "10px", sm: "13px" }, }}
        />
        <StyledBreadcrumb
          component={Link}
          to={`/${formatText(categoryName)}`}
          label={categoryName}
          sx={{ cursor: "pointer", fontSize: { xs: "10px", sm: "13px" }, }}
        />
        <StyledBreadcrumb
          component={Link}
          label={name}
          sx={{
            cursor: "pointer",
            fontSize: { xs: "10px", sm: "13px" },
          }}
        />
      </Breadcrumbs>
    </div>
  );
}