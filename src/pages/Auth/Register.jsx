import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloLogo } from "~/assets/trello.svg";
import { ReactComponent as GoogleLogo } from "~/assets/google.svg";
import { ReactComponent as MicrosoftLogo } from "~/assets/microsoft.svg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

function Register() {
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
          Đăng ký để tiếp tục
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
        />
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          variant="caption"
        >
          Bằng việc đăng ký, tôi chấp nhận Điều khoản dịch vụ của Atlassian
          Cloud và công nhận Chính sách quyền riêng tư.
        </Typography>
        <Button sx={{ width: "100%" }} variant="contained" disableElevation>
          Đăng ký
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
          <RouterLink style={{ textDecoration: "none" }} to={"/login"}>
            <MuiLink
              sx={{
                fontSize: "15px",
              }}
              underline="hover"
            >
              {"Bạn đã có tài khoản? Đăng nhập"}
            </MuiLink>
          </RouterLink>
        </Box>
      </Box>
    </>
  );
}

export default Register;
