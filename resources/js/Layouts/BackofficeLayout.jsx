import { Link } from '@inertiajs/react';
import { useState } from 'react';
import '../../css/StyleBackoffice.scss'

export default function Backoffice({children,page}) {
    const [hideSidebar, setHideSidebar] = useState(false);

    return (
        <>
            <div className="sidebar">
                <div className="logo text-center my-3">
                    <img src="https://buatlogoonline.com/wp-content/uploads/2022/10/Logo-Mobile-Legends.png" alt="" width="150px"/>
                </div>
                <ul>
                    <li className={page == 'dashboard' ? 'active' : ''}><Link href="/dashboard"><span className="fa fa-dashboard"></span> Dashboard </Link></li>
                    <li className={page == 'registrasi' ? 'active' : ''}><Link href="/registrasi"><span className="fa fa-desktop"></span> Registrasi</Link></li>
                    <li className={page == 'daftar-peserta' ? 'active' : ''}><Link href="/daftar-peserta"><span className="fa fa-user-secret"></span> Daftar Peserta</Link></li>
                </ul>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ba8af1-9afe-4a42-8798-aa2a150683e0/dcc3x19-0caebc89-cddd-49e1-a23a-6cfe40e26bbe.png/v1/fill/w_1024,h_575,strp/mobile_legends_gatot_kaca_transparent__ahrat_king_by_b_la_ze_dcc3x19-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvMjJiYThhZjEtOWFmZS00YTQyLTg3OTgtYWEyYTE1MDY4M2UwXC9kY2MzeDE5LTBjYWViYzg5LWNkZGQtNDllMS1hMjNhLTZjZmU0MGUyNmJiZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xRBLY3WcKPH6t0JrNZWB1AxzGyfTnIYgJv78MERZRcc" alt="" className="sticky-img"/>
            </div>
            <div className="main">
                <div className="header">
                    <div>
                        <span className="fa fa-gamepad me-2"></span> Tournamen Mobile Legend 
                    </div>
                    <div className="d-flex">
                        <span className="user me-3">
                            <span className="fa fa-user"></span>
                        </span>
                        <div>
                            <span className="me-3">Admin</span> 
                            <span className="dot-dropdown"> 
                                <span className="fa fa-ellipsis-vertical"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}