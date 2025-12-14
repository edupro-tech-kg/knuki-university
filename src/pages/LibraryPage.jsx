import React from 'react'
import LibraryDescription from '../components/LibraryDescription'
import LibraryStructure from '../components/LibraryStructure'
import LibraryTeam from '../components/LIbraryTeam'

function LibraryPage() {
    return (
        <div>
            <LibraryDescription />
            <LibraryStructure />
            <LibraryTeam />
        </div>
    )
}

export default LibraryPage