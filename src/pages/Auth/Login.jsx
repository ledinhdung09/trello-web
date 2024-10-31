import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloLogo } from "~/assets/trello.svg";
import { ReactComponent as GoogleLogo } from "~/assets/google.svg";
import { ReactComponent as MicrosoftLogo } from "~/assets/microsoft.svg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (email === "ad") {
      login();
      navigate("/home");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          width: "400px",
          m: "auto",
          mt: 5,
          p: 3,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
          variant="h5"
        >
          <SvgIcon component={TrelloLogo} inheritViewbox sx={{ mr: 1 }} />
          Trello
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Đăng nhập để tiếp tục
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Nhập email của bạn"
          sx={{
            "& .MuiOutlinedInput-input": {
              p: 1,
            },
          }}
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          disableElevation
          onClick={handleLogin}
        >
          Tiếp tục
        </Button>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Hoặc tiếp tục với:
        </Typography>
        <Button sx={{ width: "100%", alignItems: "center" }} variant="outlined">
          <SvgIcon component={GoogleLogo} sx={{ mr: 1 }} />
          Google
        </Button>
        <Button sx={{ width: "100%", alignItems: "center" }} variant="outlined">
          <SvgIcon component={MicrosoftLogo} sx={{ mr: 1 }} />
          Microsoft
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RouterLink style={{ textDecoration: "none" }} to={"/resetpassword"}>
            <MuiLink
              sx={{
                fontSize: "15px",
              }}
              underline="hover"
            >
              {"Bạn không đăng nhập được?"}
            </MuiLink>
          </RouterLink>
          <FiberManualRecordIcon
            sx={{
              width: "7px",
              m: 1,
            }}
          />
          <RouterLink style={{ textDecoration: "none" }} to={"/register"}>
            <MuiLink
              sx={{
                fontSize: "15px",
              }}
              underline="hover"
            >
              {"Tạo tài khoản"}
            </MuiLink>
          </RouterLink>
        </Box>
      </Box>
    </>
  );
}

export default Login;
