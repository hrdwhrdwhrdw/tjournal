import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import FollowButton from "../components/FollowButton/FollowButton";
import { MainLayout } from "../layouts/MainLayout";
import { Api } from "../utils/api";
import { ResponseUser } from '../redux/auth/types';

interface RatingPropsType {
  users: ResponseUser[];
}

const Rating: NextPage<RatingPropsType> = ({ users }) => {
  return (
    <MainLayout hideComments>
      <Paper className="pl-20 pt-20 pr-20 mb-20">
        <Typography
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
          variant="h5"
        >
          Рейтинг сообщества и блогов
        </Typography>
        <Typography>
          Десять лучших авторов и комментариев, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получат
          Plus-аккаунт на месяц
        </Typography>
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За все время" />
        </Tabs>
      </Paper>
      <Paper className="pl-20 pt-20 pr-20 mb-20">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.fullName}
                </TableCell>
                <TableCell align="right">{user?.commentsCount * 2}</TableCell>
                <TableCell align="right">
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAllUsers();
    return {
      props: {
        users,
      },
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: { users: null },
  };
};

export default Rating;