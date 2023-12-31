describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('Should update the server table',function(){
    submitServerInfo();
    updateServerTable();

    let table = document.querySelectorAll('#serverTable tbody tr td');

    expect(table.length).toEqual(2);
    expect(table[0].innerText).toEqual('Alice');
    expect(table[1].innerText).toEqual('$0.00');
  })

  afterEach(function() {
    allServers = {};
    serverId = 0
    updateServerTable();
  });
});
