describe("Rover", function() {
  
  it('should be able to make a rover', function(){
    var rover = new Rover(0, 0, 's');
    
    expect(rover).toBeDefined();
  });

});
