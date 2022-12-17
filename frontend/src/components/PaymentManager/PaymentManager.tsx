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
                  <span>email :</span>
                  <S.lala
                    type="email"
                    placeholder="example@example.com"
                  ></S.lala>
                </S.inputBox>
                <S.inputBox>
                  <span>Đia chỉ Giao hàng :</span>
                  <input type="text" placeholder="Nhập địa chỉ nhận hàng" />
                </S.inputBox>
                <S.inputBox>
                  <span>Ghi chú :</span>
                  <input type="text" placeholder="Nhập ghi chú" />
                </S.inputBox>

                <S.flex>
                  <S.inputBox>
                    <span>Thành phố :</span>
                    <input type="text" placeholder="india" />
                  </S.inputBox>
                  <S.inputBox>
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456" />
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
                  <span>Tên chủ thẻ :</span>
                  <input type="text" placeholder="Nhập tên" />
                </S.inputBox>
                <S.inputBox>
                  <span>Số thẻ :</span>
                  <input type="text" placeholder="1111-2222-3333-4444" />
                </S.inputBox>
                <S.inputBox>
                  <span>Ngày hết hạn :</span>
                  <input type="text" placeholder="dd" />
                </S.inputBox>

                <S.flex>
                  <S.inputBox>
                    <span>Năm hết hạn:</span>
                    <input
                      type="number"
                      placeholder="yy"
                      min="2000"
                      max="2022"
                    />
                  </S.inputBox>
                  <S.inputBox>
                    <span>CVV :</span>
                    <input type="text" placeholder="1234" />
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
