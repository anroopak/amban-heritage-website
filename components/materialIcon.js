const MaterialIcon = ({icon, desc, className}) => {
    return (
        <div className={`d-flex align-items-center py-2 ${className}`}>
            <span class="material-symbols-sharp me-2">{icon}</span> { desc }
        </div>
    )
}

export default MaterialIcon
