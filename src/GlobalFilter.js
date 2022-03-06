const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className="input-group flex-nowrap">
            <span>
                {''}
                <input value={filter || ''} className="form-control pull-right" placeholder="Search" onChange={(e) => setFilter(e.target.value)} />
            </span>
        </div>
    );
}

export default GlobalFilter;