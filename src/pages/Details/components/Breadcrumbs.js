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
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

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
          sx={{ cursor: "pointer" }}
        />
        <StyledBreadcrumb
          component={Link}
          to={`/${formatText(categoryName)}`}
          label={categoryName}
          sx={{ cursor: "pointer" }}
        />
        <StyledBreadcrumb
          component={Link}
          label={name}
          sx={{ cursor: "pointer" }}
        />
      </Breadcrumbs>
    </div>
  );
}
