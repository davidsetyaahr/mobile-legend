import BackofficeLayout from "@/Layouts/BackofficeLayout"

export default function Dashboard(props) {
    return (
        <BackofficeLayout page={props.auth.page}></BackofficeLayout>
    );
}
