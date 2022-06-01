import './ButtonCircle.css';

function ButtomCircle ({ label, action }: { label: string; action?: () => void }) {
    return <div className="container-buttom">
        <button type="button" onClick={action}>
            {label}
        </button>
    </div>
}

export default ButtomCircle;