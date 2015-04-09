var main = require('./src/main');

if (process.argv.length < 3) {
    printUsage();
    return;
}

main(process.argv[2]);

function printUsage() {
    console.log('');
    console.log('Node Sample Bot usage:');
    console.log('');
    console.log('node index.js <outputPath>');
    console.log('');
    console.log('\toutputPath\t relative path to the folder where the engine will read & write files (eg. output)');
}
