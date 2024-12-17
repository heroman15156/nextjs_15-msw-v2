import UsersPage from "@/app/users/page";
import {render, screen, waitFor} from "@testing-library/react";

describe('UsersPage', () => {
    it('should render users from API', async () => {
        render(<UsersPage />)

        // 초기 로딩 상태 확인
        expect(screen.getByText('Loading...')).toBeInTheDocument()

        // MSW가 모의 데이터를 반환할 때까지 대기
        await waitFor(() => {
            expect(screen.getByText('테스트유저1 (ID: 1)')).toBeInTheDocument()
            expect(screen.getByText('테스트유저2 (ID: 2)')).toBeInTheDocument()
        })
    })
})
