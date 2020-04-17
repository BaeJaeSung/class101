This is an HW for Class101
=============
예비 클둥이 배재성
-------------

구체적 구현 사항
1. 사용 불가능한 쿠폰은 cart/CartItemList.js에 couponExcluded에 상품의 id를 추가하는 것으로 적용 가능합니다.
2. 쿠폰은 중복 적용 가능하며, 체크박스로 구현하였습니다.
3. 쿠폰 적용 시 InitialPrice - DiscountAmount = FinalPrice로 구현하였습니다.
4. 적용하는 쿠폰을 확인하기 위해 쿠폰마다 id를 부여하였습니다. 단, raw data는 변경하지 않았습니다. (cart/CartItemList에서 initial_coupons 선언 후 coupons 사용)
5. score에 따른 상품 정렬은 mergeSort를 사용하였습니다. 시간복잡도 O(nlogn)
6. 리액트를 공부한지 일주일 정도밖에 되지 않았습니다.
7. 과제 완성에 총 12시간 가량 사용하였습니다.
8. 쿠폰, 상품 아이템은 API call을 통해 전달받았다고 가정하고 React 내에 변수로 저장하였습니다.
