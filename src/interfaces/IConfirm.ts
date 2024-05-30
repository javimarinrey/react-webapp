export interface IConfirm {
    title: string;
    show: boolean;
    handleClose: (action: string)=> void
    action: string;
    message: string;
}