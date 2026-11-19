import type { TBuyerData, TBuyerErrors } from '../../types';

const emptyBuyerData: TBuyerData = {
    payment: null,
    email: '',
    phone: '',
    address: '',
};

export class Buyer {
    private data: TBuyerData = { ...emptyBuyerData };

    setData(fields: Partial<TBuyerData>): void {
        const {
            payment = this.data.payment,
            email = this.data.email,
            phone = this.data.phone,
            address = this.data.address,
        } = fields;
        this.data = { payment, email, phone, address };
    }

    getData(): TBuyerData {
        return { ...this.data };
    }

    clear(): void {
        this.data = { ...emptyBuyerData };
    }

    validate(): TBuyerErrors {
        const { payment, email, phone, address } = this.data;
        const errors: TBuyerErrors = {};

        if (!payment) errors.payment = 'Выберите способ оплаты';
        if (!email.trim()) errors.email = 'Укажите электронную почту';
        if (!phone.trim()) errors.phone = 'Укажите телефон';
        if (!address.trim()) errors.address = 'Укажите адрес доставки';

        return errors;
    }
}
