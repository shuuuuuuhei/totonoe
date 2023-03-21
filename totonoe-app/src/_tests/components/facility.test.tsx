import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { FacilityList } from '../../components/Facility/FacilityList';
import { Facility } from '../../@types/sauna/Facility';
import { Comments } from '../../components/Article/Comment';
import { BrowserRouter } from 'react-router-dom';
import { StrConvertStrTime } from '../../common/Convert';

// テストスイート
describe('<FacilityList/>のテスト', () => {
    const mockFacilityList: Facility[] = [
        { id: "test", name: "test", address: "test", price: 0, eigyo_start: "test", eigyo_end: "test", access: "test", tel: "test", restaurant_flg: "test", lodging_flg: "test", working_space_flg: "test", books_flg: "test", heat_wave_flg: "test", air_bath_flg: "test", break_space_flg: "test", water_server_flg: "test", latitude: 0, longitude: 0, saunas: null, water_baths: null, amenities: null, full_count: 0, }
    ];

    screen.debug();
    it('住所が正しいかテスト', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const element = document.querySelector('.facility-address');
        expect(element.textContent).toMatch(mockFacilityList[0].address)
    });

    it('入浴料金が正しく表示されているか', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const element2 = document.querySelector('.price');
        expect(element2.textContent).toMatch(`入浴料：${mockFacilityList[0].price}円`);
    });
    it('営業時間が正しく表示されているか', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const element2 = document.querySelector('.time');
        expect(element2.textContent).toMatch(`営業：${StrConvertStrTime(mockFacilityList[0].eigyo_start, mockFacilityList[0].eigyo_end)}`);
    });
    it('営業時間が正しく表示されているか', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const element2 = document.querySelector('.time');
        expect(element2.textContent).toMatch(`営業：${StrConvertStrTime(mockFacilityList[0].eigyo_start, mockFacilityList[0].eigyo_end)}`);
    });
    it('サウナ個別リンク先が正しいか', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const link = screen.getByRole('link', { name: `${mockFacilityList[0].name}` })
        expect(link).toHaveAttribute('href', `/saunas/${mockFacilityList[0].id}`);
    });
    it('サウナ個別リンクが正しく遷移するか', () => {
        render(
            <BrowserRouter>
                <FacilityList facilities={mockFacilityList} />
            </BrowserRouter>
        )
        const link = screen.getByRole('link', { name: `${mockFacilityList[0].name}` });
        fireEvent.click(link);
        expect(window.location.pathname).toBe(`/saunas/${mockFacilityList[0].id}`);
    });
})
