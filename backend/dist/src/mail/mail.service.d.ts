export declare class MailService {
    private transporter;
    constructor();
    sendMail(to: string, subject: string, html: string): Promise<void>;
}
