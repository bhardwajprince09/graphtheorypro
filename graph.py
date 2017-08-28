from collections import defaultdict
class Graph:
  def __init__(self,graph):
     self.graph=graph
     self.ROW=len(graph)
def BFS(self,s,t,parent):
   visited =[False]*(self.ROW)
   queue=[]
   queue.append(s)
   visited[s]=True
   while queue:
     u=queue.pop(0)
     for ind,val in enumerate(self.graph[u]):
       if visited[ind]==False and val>0:
          queue.append(ind)
          visited[ind]=True
          parent[ind]=u



def findDisjointPaths(self,source,destination):
    parent=[-1]*(self.ROW)
    max_flow=0
    while self.BFS(source,destination,parent):
        path_flow=float("Inf")
        s=destination
        while(s!=source):
            path_flow=min(path_flow,self.graph[parent[s]][s])
            s=parent[s]
        max_flow+=path_flow
        v=destination
        while(v!=source):
               u=parent[v]
               self.graph[u][v]-=path_flow
               self.graph[v][u]+=path_flow
               v=parent[v]
               return max_flow
            
graph=[[0,1,1,1],
       [0,0,1,0],
       [0,0,0,1],
       [0,0,1,1]]
g=Graph(graph)
source=0; destination=3
print("there can be max %d edge-disjoint paths from %d to %d" % (g.findDisjointPaths(source,destination),source,destination))

