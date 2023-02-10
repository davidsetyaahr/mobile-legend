import BackofficeLayout from "@/Layouts/BackofficeLayout"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useState, useEffect} from 'react'
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

    const MySwal = withReactContent(Swal)
    const confirmSwal = async (id,type) => {
        Inertia.put(`/acc/${id}`)

        // const msg = type == 'acc' ? 'Peserta Akan Di ACC' : 'Peserta Akan Dihapus' 
        // const success = type == 'acc' ? 'Peserta Berhasil Di ACC' : 'Peserta Berhasil Dihapus'
        // MySwal.fire({
        //     title: 'Apakah anda yakin?',
        //     text: msg,
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yakin',
        //     showLoaderOnConfirm: true,
        //     }).then((result) => {
        //         if(type == 'acc'){
        //             Inertia.put(`/acc/${id}`)
        //         } else{
        //             Inertia.delete(`/delete/${id}`);
        //         }
        //     })
    }

    const [detail, setDetail] = useState([])
    
    const getDetail = (id) => {
        const data = props.team.filter(x => x.id==id)
        setDetail(data)
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
        myModal.show()
    }
    
    useEffect(() => {
        // console.log(props)
    })

    return (
        <>
        <BackofficeLayout page={props.auth.page}>
            <div className="row mt-3">
                <div className="col">
                <h3 className="fw-bold title">{props.title}</h3>
                    {props.session.success && (
                        <div className="alert alert-success border-0 shadow-sm rounded-3">
                            {props.session.success}
                        </div>
                    )}                
                    <div className="table-responsive">
                        <table className="table table-custom">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Team</th>
                                    <th>Nama Ketua</th>
                                    <th>Nomer HP</th>
                                    <th>Status</th>
                                    <th width="25%">Opsi</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                props.team.map((data,key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{data.team_name}</td>
                                        <td>{data.team_leader}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.status == '0' ? 'Pending' : 'Accept'}</td>
                                        <td>
                                            <button onClick={confirmSwal.bind(this,data.id,'acc')} className="me-2 btn btn-warning btn-sm">Acc</button> 
                                            <button onClick={getDetail.bind(this,data.id)} className="me-2 btn btn-primary btn-sm">Detail</button> 
                                            <button onClick={confirmSwal.bind(this,data.id,'del')} className="me-2 btn btn-danger btn-sm">Hapus</button> 
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Detail Pendaftar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                detail.length == 1 && 
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th width="25%">Nama Team</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_name}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Nama Ketua</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_leader}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Nomer HP</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].phone}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Anggota Team 1</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_1}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Anggota Team 2</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_2}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Anggota Team 3</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_3}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Anggota Team 4</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].team_4}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey XS</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].xs}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey S</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].s}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey M</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].m}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey L</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].l}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey XL</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].xl}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Jersey XXL</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].xxl}</td>
                                            </tr>
                                            <tr>
                                                <th width="25%">Status</th>
                                                <td width="8%">:</td>
                                                <td>{detail[0].status == '0' ? 'Pending' : 'Accept'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            {
                                detail.length == 1 && 
                                <button onClick={confirmSwal.bind(this,detail[0].id,'acc')} className="btn btn-warning fw-bold">ACC Pendaftar</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </BackofficeLayout>
        </>
    );
}
