function promptFeatures(readmeData) {
    if(!readmeData.features){
    readmeData.features = [];
    }
    
    return inquirer.prompt([

        {
            type: 'text',
            name: 'feature',
            message: 'Feature:'
        },
        {
            type: 'confirm',
            name: 'confirmFeature',
            message: 'Would you like to add another feature?'
        }

    ])
    .then(featuresData => {
        readmeData.features.push(featuresData);
        console.log(readmeData.features);
        if(featuresData.confirmFeature) {
            return promptFeatures(featuresData)
        } else {
            return readmeData;
        }
    })
}

{
    type: 'confirm',
    name: 'featuresConfirm',
    message: 'Would you like to add a bulleted list for program features?',
    default: false
}

.then(readmeData => {
    if(readmeData.featuresConfirm) {
        return promptFeatures(readmeData)
    } else {
        return readmeData
    }