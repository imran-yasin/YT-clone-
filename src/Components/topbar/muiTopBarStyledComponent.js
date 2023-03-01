export const topToolbar = {
  "&.MuiToolbar-root": {
    position: "sticky",
    top: 0,
    zIndex: 5,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "green",
  },
};

export const inputBox = {
  "&.MuiBox-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    width: { lg: "42%", md: "40%", sm: "35%", xs: "40%" },
    borderRadius: "50px",
  },
};

export const topToolbarRightBox = {
  "&.MuiBox-root": {
    display: "flex",
    alignItems: "center",
  },
};

export const videoIcon = {
  "&.MuiSvgIcon-root": {
    margin: 1,
    padding: 0.1,
    fontSize: 35,
    display: { xs: "none", sm: "flex" },
    "&:hover": {
      backgroundColor: "action.active",
      color: "white",
      borderRadius: "50px",
    },
  },
};

export const notificationBadge = {
  "&.MuiBadge-root": {
    margin: 1,
    padding: 0.1,
    fontSize: 35,
    display: { xs: "none", sm: "flex" },
    "&:hover": {
      backgroundColor: "action.active",
      color: "white",
      borderRadius: "50px",
    },
  },
};
