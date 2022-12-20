import { useAuthContext } from "@context/AuthContext";
import * as S from "./PaymentManager.styled";
interface Props {}

export const PaymentManager = (props: Props) => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <>
      <S.Wrapper>
        <S.container>
          <form action="">
            <S.row>
              <S.col>
                <h3 className="title">Hóa đơn điện tử</h3>
                <S.inputBox>
                  <span>Tên:</span>
                  <S.inputName
                    type="text"
                    placeholder="Nhập tên người nhận hàng"
                  />
                </S.inputBox>
                <S.inputBox>
                  <span>Địa chỉ:</span>
                  <S.inputName
                    type="text"
                    placeholder="Địa chỉ giao hàng"
                  ></S.inputName>
                </S.inputBox>
                <S.inputBox>
                  <span>Ghi chú:</span>
                  <S.inputName type="text" placeholder="ghi chú"></S.inputName>
                </S.inputBox>
                <S.inputBox>
                  <span>Email :</span>
                  <S.inputName
                    type="email"
                    placeholder="example@example.com"
                  ></S.inputName>
                </S.inputBox>

                <S.flex>
                  <S.inputBox>
                    <span>City :</span>
                    <S.inputName
                      type="text"
                      placeholder="your city name"
                    ></S.inputName>
                  </S.inputBox>
                  <S.inputBox>
                    <span>zip code : </span>
                    <S.inputName
                      type="text"
                      placeholder="your zip code"
                    ></S.inputName>
                  </S.inputBox>
                </S.flex>
              </S.col>

              <S.col>
                <h3 className="title">Thanh toán bằng thẻ tín dụng</h3>
                <S.inputBox>
                  <span>cards accepted :</span>
                  <S.inputName
                    type="text"
                    placeholder="Nhập tên người nhận hàng"
                  />
                </S.inputBox>
                <S.inputBox>
                  <span>Name card:</span>
                  <S.inputName type="text" placeholder="your name card" />
                </S.inputBox>
                <S.inputBox>
                  <span>number card:</span>
                  <S.inputName type="text" placeholder="your number card" />
                </S.inputBox>
                <S.inputBox>
                  <span>day:</span>
                  <S.inputName type="text" placeholder="day" />
                </S.inputBox>

                <S.flex>
                  <S.inputBox>
                    <span>year:</span>
                    <S.inputName
                      type="number"
                      placeholder="yy"
                      min="2000"
                      max="2022"
                    />
                  </S.inputBox>

                  <S.inputBox>
                    <span>CVV:</span>
                    <S.inputName type="text" placeholder="your number card" />
                  </S.inputBox>
                </S.flex>
              </S.col>
            </S.row>

            <S.submitbtn>Đặt hàng</S.submitbtn>
          </form>
        </S.container>
      </S.Wrapper>
    </>
  );
};
