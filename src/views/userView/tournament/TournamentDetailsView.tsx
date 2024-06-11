export default function TournamentDetailsView() {
    return (
        <div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="info-tab" data-bs-toggle="tab"
                            data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane"
                            aria-selected="true">Info Tournament
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="teams-tab" data-bs-toggle="tab"
                            data-bs-target="#teams-tab-pane" type="button" role="tab" aria-controls="teams-tab-pane"
                            aria-selected="false">Teams
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="players-tab" data-bs-toggle="tab"
                            data-bs-target="#players-tab-pane" type="button" role="tab" aria-controls="players-tab-pane"
                            aria-selected="false">Players
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="rounds-tab" data-bs-toggle="tab"
                            data-bs-target="#rounds-tab-pane" type="button" role="tab" aria-controls="rounds-tab-pane"
                            aria-selected="false">Rounds
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="classification-tab" data-bs-toggle="tab"
                            data-bs-target="#classification-tab-pane" type="button" role="tab" aria-controls="classification-tab-pane"
                            aria-selected="false">Classification
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab"
                     tabIndex={0}>
                    <br/>
                    Info
                </div>
                <div className="tab-pane fade" id="teams-tab-pane" role="tabpanel" aria-labelledby="teams-tab"
                     tabIndex={0}>
                    <br/>
                    Teams
                </div>
                <div className="tab-pane fade" id="players-tab-pane" role="tabpanel" aria-labelledby="players-tab"
                     tabIndex={0}>
                    <br/>
                    Player
                </div>
                <div className="tab-pane fade" id="rounds-tab-pane" role="tabpanel" aria-labelledby="rounds-tab"
                     tabIndex={0}>
                    <br/>
                    Rounds
                </div><div className="tab-pane fade" id="classification-tab-pane" role="tabpanel" aria-labelledby="classification-tab"
                           tabIndex={0}>
                <br/>
                classification
            </div>
            </div>

        </div>
    )
}